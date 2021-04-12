import dayjs from 'dayjs';

export function dateFormatter(date) {
  return dayjs(date).format('DD/MM/YY HH:mm')
}
