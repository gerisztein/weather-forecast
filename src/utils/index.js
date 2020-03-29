export const filterData = ({ data }) => {
  const [today, ...forecast] = data.list
  const todayDate = today.dt_txt.split(' ')[0]
  const days = 3
  const list = forecast
    .filter(day => day.dt_txt.includes('12:00:00') && !day.dt_txt.includes(todayDate))
    .slice(0, days)

  return {
    city: data.city,
    list,
    today
  }
}

export const formatTemperature = (temperature) => `${Math.round(temperature)}°`

export const getIconUrl = (icon) => `//openweathermap.org/img/wn/${icon}@2x.png`

export const getWeekday = (date, locale = 'en-US') => new Date(date)
  .toLocaleDateString(locale, { weekday: 'short' })
