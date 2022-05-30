const jwt = require('jsonwebtoken');
require('dotenv').config();

const validateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token || token === '') {
      return res.status(401).json({ message: 'Token not found' });
    }

    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};
