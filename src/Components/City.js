import React from 'react'

function City({city, country}) {
  return (
    <div className="location-item">
      <h2>{city}</h2>
      <p>{country}</p>
    </div>
  )
}

export default City
