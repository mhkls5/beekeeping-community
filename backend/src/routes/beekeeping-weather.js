module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/beekeepers/:id/weather',
      handler: 'beekeeping-weather.getWeatherForBeekeeper',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};