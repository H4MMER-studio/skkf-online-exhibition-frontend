export function getDateObj(date: string) {
  const [years, times] = date.split('T');
  const newYears = years.length ? years.split('-').map((n) => Number(n)) : [];
  const newTimes = times?.length
    ? times
        .slice(0, -1)
        .split(':')
        .map((n) => Number(n))
    : [];
  const isYearExist = newYears.length > 0;
  const isTimeExist = newTimes.length > 0;
  const dayNum = isYearExist
    ? new Date(newYears[0], newYears[1] - 1, newYears[2]).getDay()
    : 0;

  const startDate = {
    year: isYearExist ? newYears[0] : 0,
    month: isYearExist ? newYears[1] : 0,
    date: isYearExist ? newYears[2] : 0,
    day: dayNum,
    hours: isTimeExist ? newTimes[0] : 0,
    minutes: isTimeExist ? newTimes[1] : 0,
    seconds: isTimeExist ? newTimes[2] : 0,
  };
  return startDate;
}

export function toTwinNum(date: string | number) {
  if (date.toString().length < 2) {
    return `0${date}`;
  }
  return `${date}`;
}
