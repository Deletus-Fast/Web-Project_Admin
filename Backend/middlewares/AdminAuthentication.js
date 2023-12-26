const user = require('../models/user')

function verifyAdminRole(req, res, next) {
    const { user } = req
  
    if (user && user.role === 'admin') {
      next();
    } else {
      res.status(403).json({ message: 'Access denied. Admin privileges required.' })
    }
  }
  
  module.exports = {
    verifyAdminRole,
  };