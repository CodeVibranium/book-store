async function googleBooksAPI({ searchData, startIndex, perPageSize }) {
  if (typeof searchData !== "string")
    return new Error("Search Data must be string");
  const API_KEY = process.env.API_KEY;
  const API = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=${searchData}&startIndex=${startIndex}&maxResults=${perPageSize}`;
  try {
    const booksRes = await fetch(API, {
      method: "GET",
    });
    const parsedRes = await booksRes.json();
    return parsedRes;
  } catch (err) {
    console.log(err);
  }
}
module.exports = { googleBooksAPI };
