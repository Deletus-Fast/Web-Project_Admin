const user = require('../models/user')
const jwt = require('jsonwebtoken')

function verifyUserToken(req, res, next) {
  const token = req.header('Authorization')

  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token not provided.' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Invalid token.' })
  }
}

module.exports = {
  verifyUserToken,
};