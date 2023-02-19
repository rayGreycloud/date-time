const {
  addDays,
  format,
  formatDistanceToNow,
  isAfter,
  isBefore,
  isPast,
  isSameMinute,
  isThisYear,
  isToday,
  parseISO,
  startOfToday,
  startOfYesterday,
  startOfWeek,
  isSameYear
} = require('date-fns');

// get date
const getCurrentDate = () => new Date();

const getCurrentDateFormatted = (date, format) => {
  if (!format) return format(new Date(date));

  return format(new Date(date), format);
};

const getThisYear = () => getYear(new Date());

const getLastYear = () => getYear(subYears(new Date(), 1));

const getFormattedDateTime = date =>
  format(new Date(date), "yyyy-MM-dd'T'HH:mm:ssxxx");

// get start of dates
const todayStart = () => startOfToday();

const yesterdayStart = () => startOfYesterday(new Date());

const thisWeekStart = () => startOfWeek(new Date());

const thisISOWeekStart = () =>
  format(startOfISOWeek(new Date()), "yyyy-MM-dd'T'HH:mm:ssxxx");

const thisMonthStart = () =>
  format(startOfMonth(new Date()), "yyyy-MM-dd'T'HH:mm:ssxxx");

const thisYearStart = () =>
  format(startOfYear(new Date()), "yyyy-MM-dd'T'HH:mm:ssxxx");

const lastYearStart = () =>
  format(subYears(startOfYear(new Date()), 1), "yyyy-MM-dd'T'HH:mm:ssxxx");

// distance
const timeFromNow = date =>
  formatDistanceToNow(new Date(date), { addSuffix: true });

// date comparisons
const dateIsBefore = (date1, date2) =>
  isBefore(new Date(date1), new Date(date2));

const dateIsBeforeToday = date => isBefore(new Date(date), startOfToday());

const dateIsThisYear = date => isThisYear(new Date(date));

const dateIsNotToday = date => !isToday(new Date(date));

const dateIsAfter = (date1, date2) => isAfter(new Date(date1), new Date(date2));

const dateIsPast = date => isPast(new Date(date));

const dateIsSameYear = (date1, date2) =>
  isSameYear(new Date(date1), new Date(date2));

const dateIsSameOrAfter = (date1, date2) => {
  const dateA = new Date(date1);
  const dateB = new Date(date2);
  console.log('dateA:', dateA);
  console.log('dateB:', dateB);
  console.log('isSameMinute(dateA, dateB):', isSameMinute(dateA, dateB));
  console.log('isAfter(dateA, dateB):', isAfter(dateA, dateB));
  return isSameMinute(dateA, dateB) || isAfter(dateA, dateB);
};

// manipulate date
const addDaysToDate = (date, days) => addDays(parseISO(date), days);

module.exports = {
  getCurrentDate,
  getCurrentDateFormatted,
  getThisYear,
  getLastYear,
  getFormattedDateTime,
  todayStart,
  yesterdayStart,
  thisWeekStart,
  thisISOWeekStart,
  thisMonthStart,
  thisYearStart,
  lastYearStart,
  timeFromNow,
  dateIsBefore,
  dateIsBeforeToday,
  dateIsThisYear,
  dateIsNotToday,
  dateIsAfter,
  dateIsPast,
  dateIsSameYear,
  dateIsSameOrAfter,
  addDaysToDate
};
