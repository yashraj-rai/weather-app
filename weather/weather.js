const request = require('request');

var getWeather = (latitude, longitude, callback) => {
  request({
     url: `https://api.darksky.net/forecast/aa3a00db62d895c7f3714a654a541ed7/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
};

module.exports.getWeather = getWeather;
