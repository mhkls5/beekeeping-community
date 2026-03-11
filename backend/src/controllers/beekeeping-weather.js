'use strict';

/**
 * A set of functions called "actions" for `beekeeping-weather`
 */

const xml2js = require('xml2js');

module.exports = {
  // 養蜂家ごとの天気情報を取得するカスタムエンドポイント
  async getWeatherForBeekeeper(ctx) {
    try {
      const { id } = ctx.params;

      // 指定された養蜂家の情報を取得
      const beekeeper = await strapi.entityService.findOne(
        'api::beekeeper.beekeeper',
        id,
        {
          populate: '*'
        }
      );

      if (!beekeeper) {
        return ctx.notFound('Beekeeper not found');
      }

      // Yahoo天気APIから天気情報を取得
      const weatherData = await this.fetchWeatherFromYahoo(
        beekeeper.attributes.location_lat,
        beekeeper.attributes.location_lng
      );

      // 天気情報をレスポンスとして返す
      ctx.body = {
        beekeeper,
        weather: weatherData,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('Error in getWeatherForBeekeeper:', error);
      ctx.badRequest('Error fetching weather data');
    }
  },

  // Yahoo天気APIから天気情報を取得する内部メソッド
  async fetchWeatherFromYahoo(lat, lng) {
    // APIキーを環境変数から取得
    const yahooClientId = process.env.YAHOO_CLIENT_ID;

    if (!yahooClientId) {
      console.warn('Yahoo Client ID not found in environment variables');
      // モックデータを返す
      return {
        precipitation: Math.floor(Math.random() * 10),
        precipitation_probability: Math.floor(Math.random() * 100),
        condition: ['晴れ', '曇り', '雨'].sort(() => 0.5 - Math.random())[0],
        temperature: 15 + Math.random() * 15, // 15-30度の間でランダム
        location: { lat, lng },
        forecast: [
          { time: '1時間後', precipitation: Math.floor(Math.random() * 5) },
          { time: '2時間後', precipitation: Math.floor(Math.random() * 10) },
          { time: '3時間後', precipitation: Math.floor(Math.random() * 15) }
        ]
      };
    }

    try {
      // Yahoo APIを呼び出す
      const coordinates = `${lng},${lat}`;
      const apiUrl = `https://map.yahooapis.jp/weather/V1/place?appid=${yahooClientId}&coordinates=${coordinates}&output=json`;

      const response = await fetch(apiUrl);
      const xmlText = await response.text();

      // XMLをJSONに変換
      const parser = new xml2js.Parser({ explicitArray: false, ignoreAttrs: false });
      const jsonData = await parser.parseStringPromise(xmlText);

      // 必要な情報だけを抽出して返す
      if (jsonData.YDF && jsonData.YDF.Feature && jsonData.YDF.Feature.Property && jsonData.YDF.Feature.Property.WeatherList) {
        const weatherList = jsonData.YDF.Feature.Property.WeatherList.Weather;
        let rainfallData = [];

        // 配列か単一のオブジェクトかによって処理を分ける
        if (Array.isArray(weatherList)) {
          rainfallData = weatherList.map(item => ({
            type: item.Type,
            date: item.Date,
            rainfall: parseFloat(item.Rainfall) || 0
          }));
        } else {
          rainfallData = [{
            type: weatherList.Type,
            date: weatherList.Date,
            rainfall: parseFloat(weatherList.Rainfall) || 0
          }];
        }

        return {
          location: { lat, lng },
          rainfall_data: rainfallData,
          timestamp: new Date().toISOString()
        };
      } else {
        throw new Error('Invalid response format from Yahoo API');
      }
    } catch (error) {
      console.error('Error fetching from Yahoo API:', error);
      // エラー時はモックデータを返す
      return {
        error: 'Failed to fetch weather data',
        mock_data: {
          precipitation: Math.floor(Math.random() * 10),
          condition: '曇り',
          temperature: 20
        }
      };
    }
  }
};