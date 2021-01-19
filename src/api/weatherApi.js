export const getWeather = async () => {
  const response = await fetch('http://api.weatherstack.com/forecast?access_key=270f88f5418c17f1ad3db015afc2bb31&query=Wroclaw')

  const data = await response.json()

  return data
}






