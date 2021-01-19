import React from 'react'
import Date from './Date'
import City from'./City'
function Location({location}) {
  return (
    <div className="location">
      <City city={location.name} country={location.country}/>
      <Date time={location.localtime}/>
    </div>
  )
}

export default Location
