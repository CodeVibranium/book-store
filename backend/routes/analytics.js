const { Router } = require("express");
const prisma = require("../db");
const router = Router();

router.get("/most-appeared-author/", async (req, res, next) => {
  try {
    const authorsData = await prisma.authors.findMany({
      orderBy: { appeared: "desc" },
      take: 1,
    });
    res.apiRes = { authorsData };
    next();
  } catch (error) {
    console.log("ERR", err);
    next({
      message: err.message,
      statusCode: err.statusCode || 500,
    });
  }
});

module.exports = router;
