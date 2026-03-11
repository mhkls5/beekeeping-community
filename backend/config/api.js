module.exports = {
  jwt: {
    expiresIn: process.env.JWT_EXPIRATION || '7d',
  },
};