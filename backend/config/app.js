module.exports = {
  keys: process.env.APPLICATION_KEYS || ['key1', 'key2'],
  gracefulShutdownTimeout: 6000,
  request: {
    multipart: {
      enabled: true,
      mode: 'stream',
      fields: {
        maxFileSize: 250000000,
        maxFiles: 10,
      },
    },
  },
  api: {
    rest: {
      defaultLimit: 25,
      maxLimit: 100,
      withCount: true,
    },
  },
};