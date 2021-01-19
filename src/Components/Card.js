import React from 'react'
import Icon from './Icon'
import Temperature from './Temperature'
import Location from './Location'
import Information from './Information'
function Weather({weather}) {
  return (
    <div className="Card">
      <Icon img={weather.current.weather_icons[0]}/>
      <Temperature temp={weather.current.temperature}/>
      <Location location={weather.location}/>
      <Information infos={weather.current}/>
    </div>
  )
}

export default Weather
