const request = require('request')

const forecast = ( lat, long, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&units=metric&appid=85f831e9dc87c9e5d374b4ac52e444c8'

    request({url, json: true}, (error, {body}) => {
        
        if(error) {
            callback("Unable to connect to weather service!", undefined)
        } else if(+body.cod === 400) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, "Its currently " + body.main.temp + " degrees out. There is 0% chance of rain")
        }
    })
}

module.exports = forecast;