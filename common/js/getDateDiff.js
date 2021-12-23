import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

function getDateDiff(dateFrom, dateTo) {
  if (dateFrom < dateTo) {
    [dateFrom, dateTo] = [dateTo, dateFrom]
  }
  const dateFromObj = DateTime.fromISO(dateFrom);
  const dateToObj = DateTime.fromISO(dateTo);

  return dateFromObj.diff(dateToObj, ['years', 'months', 'days',]).toObject()
}

function getDateDiffNowString(dateTime) {
  const locOpt = { minimumIntegerDigits: 2, };
  const loc = 'ru-RU';
  let ret = '';
  const dt = dateTime.diff(DateTime.now(), ['hours', 'minutes', 'seconds', 'milliseconds']).toObject();

  if (dt.hours <= 0 && dt.minutes <= 0 && dt.seconds <= 0) {
  } else {
    ret = `${dt.hours.toLocaleString(loc, locOpt)}:${dt.minutes.toLocaleString(loc, locOpt)}:${dt.seconds.toLocaleString(loc, locOpt)}`;
  }
  return ret;
}

export { getDateDiff, getDateDiffNowString };
