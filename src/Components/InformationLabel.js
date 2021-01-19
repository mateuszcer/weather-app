import React from 'react'

function InformationLabel({label, data}) {
  return (
    <div className="info-label">
      <p>{label}</p>
      <p>{data}</p>
    </div>
  )
}

export default InformationLabel
