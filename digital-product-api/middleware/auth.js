const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const auth = (req, res, next) => {
  const authHeader = req.header('Authorization');
  
  if (!authHeader) {
    return res.status(401).send({ error: 'Unauthorized: No token provided' });
  }

  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return res.status(401).send({ error: 'Unauthorized: Invalid token format' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).send({ error: 'Unauthorized: Token has expired' });
    } else if (error.name === 'JsonWebTokenError') {
      return res.status(401).send({ error: 'Unauthorized: Invalid token' });
    } else {
      return res.status(500).send({ error: 'Internal server error' });
    }
  }
};

module.exports = auth;
