require("dotenv").config({
  path: `.env`,
});
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT;
const { requestEnd, requestStart } = require("./middlewares/responseTime");

const errorHandler = require("./middlewares/errorHandler");
const booksRoutes = require("./routes/books");
const analyticsRoutes = require("./routes/analytics");

const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.listen(PORT, () => {
  console.log(`Server Started on port ${PORT}`);
});
app.use(requestStart);
app.use("/books/", booksRoutes);
app.use("/analytics/", analyticsRoutes);
app.use(requestEnd);

app.use(errorHandler);

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
  process.exit(1);
});
