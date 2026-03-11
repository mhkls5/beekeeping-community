module.exports = {
  middleware: {
    cors: {
      enabled: true,
      origin: ['http://localhost:3000', 'http://localhost:3001', 'http://127.0.0.1:3000'], // Next.jsのデフォルトポート
      credentials: true,
    },
  },
};