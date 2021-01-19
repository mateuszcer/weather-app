import React from 'react'
import InformationLabel from './InformationLabel'


function Information({infos}) {
  const [day, setDay] = React.useState()

  React.useEffect(() => {
    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date()
    setDay(daysInWeek[date.getDay()])
  },[])

  const informationArr = [
    {
      id: 1,
      label: 'Feels like:',
      data: `${infos.feelslike}°C`
    },
    {
      id: 2,
      label: 'Humidity:',
      data: `${infos.humidity} %`
    },
    {
      id: 3,
      label: 'Preassure:',
      data: `${infos.pressure}hPa`
    }, 
    {
      id: 4,
      label: 'Visibility:',
      data: infos.visibility
    },
    {
      id: 5,
      label: 'Wind deegre:',
      data: `${infos.wind_degree}°`
    },
    {
      id: 6,
      label: 'Wind direction:',
      data: `${infos.wind_dir}`
    },
    {
      id: 7,
      label: 'Wind speed:',
      data: `${infos.wind_speed}`
    }
  ]


  return (
    <div className="information">
      <h2>{day}</h2>
      <div className="label-container">
        {informationArr.map(info => <InformationLabel key={info.id} label={info.label} data={info.data}/>)}
      </div>
    </div>
  )
}

export default Information
