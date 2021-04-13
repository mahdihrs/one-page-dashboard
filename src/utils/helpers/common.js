import dayjs from 'dayjs';

export function dateFormatter(date) {
  return dayjs(date).format('DD/MM/YY HH:mm');
}

export function queryDateFormatter(date) {
  return dayjs(date).format('MM-DD-YYYY');
}

export function getPercentage({ value, total }) {
  return +(value / total * 100).toFixed(2);
}

export function queryMonthFormatter(date) {
  return dayjs(date).format('MMM-YYYY');
}