export const formatDate = (dateUtc?: string) => {
  const activeDate = dateUtc ? new Date(dateUtc) : new Date();

  const monthFull = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthShort = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = activeDate.getDate()
  const month = dateUtc ? monthFull[activeDate.getMonth()] : monthShort[activeDate.getMonth()]
  const day = days[activeDate.getDay()]
  const year = activeDate.getFullYear()

  return {
    date,month,day,year
  }
};
