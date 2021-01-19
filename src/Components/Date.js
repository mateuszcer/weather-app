import React from 'react'

function Date({time}) {
  const timeArr = time.split(' ')
  const date = timeArr[0]
  const dateTime = timeArr[1]
  return (
    <div className="location-item date">
      <h2>{dateTime}</h2>
      <p>{date}</p>
    </div>
  )
}

export default Date
