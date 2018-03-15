module.exports = function logger(req, res, next) {
  // console.log(`
  //   method: ${req.method}
  //   params: ${JSON.stringify(req.params)}
  //   body: ${JSON.stringify(req.body)}
  //   query: ${JSON.stringify(req.query)}
  // `);

  // headers: ${JSON.stringify(req.headers)}

  next()
}
