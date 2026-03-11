module.exports = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 1337,
  url: process.env.URL || 'http://localhost:1337',
  admin: {
    url: '/admin',
    serveAdminPanel: true,
  },
};