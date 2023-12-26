const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    userId: user._id,
    username: user.username,
    role: user.role,
  };

  const options = {
    expiresIn: '1h', // Token expiration time
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, options);
  return token;
}

module.exports = {
  generateToken,
};