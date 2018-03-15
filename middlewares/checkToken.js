const jwt = require('jsonwebtoken')

const checkToken = async (req, res, next) => {
  const token = req.headers['authorization']

  if (!token) {
    res.status(403).json({ message: 'Forbidden. No Token !' })
    return
  }

  try {
    var tokenObj = jwt.verify(token, process.env.NODE_JWT_SECRET)
  } catch ({ message }) {
    res.status(403).json({ message })
    return
  }

  req.token = tokenObj
  next()
}

module.exports = checkToken
