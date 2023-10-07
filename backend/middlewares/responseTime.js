function requestStart(req, res, next) {
  const startTime = Date.now();
  req.startTime = startTime;
  next();
}

function requestEnd(req, res, next) {
  const endTime = Date.now() - req.startTime;
  const apiRes = { ...res.apiRes, responseTimeInMs: endTime };
  delete res.apiRes;
  return res.json(apiRes);
}

module.exports = { requestStart, requestEnd };
