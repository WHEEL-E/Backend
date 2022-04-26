const getTimeNowFormatted = () => {
  const nowDate = new Date()
  let nowDateFormatted = `${nowDate.getDay()}-${nowDate.getMonth() + 1}-`
  nowDateFormatted = ` ${nowDate.getFullYear()} ${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`

  return nowDateFormatted
}

export default getTimeNowFormatted
