import dayjs from 'dayjs';

import { TIME_STAMP } from '../constants';

function transformRevenueData({ orders, ...rest }) {
  const revenueToShow = getRevenueDataChart({ orders, ...rest });
  const totalRevenue = getTotalRevenue(orders);
  return { revenueToShow, totalRevenue };
}

function getRevenueDataChart({ orders, revStart, revEnd }) {
  const completedData = orders?.filter(order => {
    const unixStart = dayjs(revStart).unix();
    const unixEnd = dayjs(revEnd).add(1, 'month').unix();
    const unixDueOrder = dayjs(order.due_date).unix();
    if (revStart && revEnd) {
      return order.status === 'completed' && (unixDueOrder > unixStart && unixDueOrder <= unixEnd);
    }
    return order.status === 'completed';
  });

  const revenueToShow = completedData?.map(({ due_date, conversion_revenue, status, ...rest }) => {
    const hourToSec = dayjs(due_date).get('hour') * TIME_STAMP.SECONDS_IN_A_HOUR;
    const minToSec = dayjs(due_date).minute() * TIME_STAMP.SECONDS_IN_A_MINUTE;
    const secTotal = hourToSec + minToSec;

    const dayIndex = dayjs(due_date).day() === 0 ? 7 : dayjs(due_date).day();
    const xValue = (secTotal / TIME_STAMP.SECONDS_IN_A_DAY) + dayIndex;

    return status === 'completed' && {
      conversion_revenue,
      due_date,
      chartValue: [xValue, +conversion_revenue],
      ...rest
    };
  });
  return revenueToShow;
}

function getTotalRevenue(data) {
  return data?.reduce((accumulator, order) => accumulator + +order.conversion_revenue, 0);
}

export default transformRevenueData;