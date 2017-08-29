/*
  Get weather data from api
*/
export function getWeatherData(city) {
  if (city !== '') {
    return window.fetch(`/api/location/search/?query=${city}`)
      .then(response => response.json())
      .then(function(result) {
            if (typeof result[0] !== 'undefined')
              return window.fetch(`/api/location/${result[0].woeid}`)
      })
      .then(data => data.json());
    }
  else {
    return Promise.reject("failed");
  }
}
/*
var test = getWeatherData('my city')
test.then(weatherResult => alert(weatherResult))
*/
