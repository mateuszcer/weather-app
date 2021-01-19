import React from 'react'
import {getWeather} from '../api/weatherApi'
import Card from './Card'
import Loading from './Loading'
function WeatherApp() {
  const [weather, setWeather] = React.useState();

  React.useEffect(() => {
    getWeather()
      .then(data => setWeather(data))
  }, [])

  
  console.log(weather);
  return (
    <div className="weather-app">
      <div className="weather-container">
        {weather !== undefined ? <Card weather={weather}/> : <Loading />}
      </div>
    </div>
  )
}

export default WeatherApp
