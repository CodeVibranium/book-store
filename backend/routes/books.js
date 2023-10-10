const { Router } = require("express");
const { googleBooksAPI } = require("../utils");
const { BadRequestError, NotFoundError } = require("../Errors/errors");
const prisma = require("../db");
const router = Router();

router.get("/all/", async (req, res, next) => {
  try {
    const { q: searchData, startIndex, maxResults: perPageSize } = req.query;
    if (!searchData) throw new BadRequestError("Search data is required");
    const booksData = await googleBooksAPI({
      searchData,
      startIndex,
      perPageSize,
    });
    let authorsCount = {};
    if (!booksData.items) {
      throw new NotFoundError("Books not found!");
    }
    booksData.items.forEach((eachBook) => {
      const bookAuthors = eachBook.volumeInfo.authors || [];
      bookAuthors.map((eachAuthor) => {
        if (authorsCount?.[eachAuthor]) {
          authorsCount[eachAuthor]++;
        } else {
          authorsCount[eachAuthor] = 1;
        }
      });
    });
    for (const authorName in authorsCount) {
      await prisma.authors.upsert({
        where: { name: authorName },
        update: { appeared: { increment: authorsCount[authorName] } },
        create: { name: authorName, appeared: authorsCount[authorName] },
      });
    }
    res.apiRes = {
      books: booksData,
    };
    next();
  } catch (err) {
    console.log("ERR", err);
    next({
      message: err.message,
      statusCode: err.statusCode || 500,
    });
  }
});

module.exports = router;
