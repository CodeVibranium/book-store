function errorHandler(err, req, res, next) {
  let statusCode = err.statusCode || 500;
  if (err.isJoi) {
    statusCode = 400;
  }
  const message =
    statusCode === 500
      ? "Something went wrong, please try later."
      : err.message;
  return res.status(statusCode).json({ message });
}

module.exports = errorHandler;
