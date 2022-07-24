import "./CurrentWeather.css"

import React from "react"

const CurrentWeather = ({ data }) => {
  const description =
    data.weather[0].description.charAt(0).toUpperCase() +
    data.weather[0].description.slice(1)
  const icon = data.weather[0].icon
  const temperatureMain = Math.round(data.main.temp)
  const temperatureFeelsLike = Math.round(data.main.feels_like)
  const windSpeed = Math.floor(data.wind.speed)
  const humidity = data.main.humidity
  const pressure = data.main.pressure

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={`icons/${icon}.png`} />
      </div>
      <div className="bottom">
        <p className="temperature">{temperatureMain}˚C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">{temperatureFeelsLike}˚C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{windSpeed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
