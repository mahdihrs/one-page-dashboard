import * as React from 'react';
import dayjs from 'dayjs';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsConversionPie from 'highcharts/highcharts-more';

import WidgetWrapper from '../widget-wrapper';
import CardHeader from '../card-header';
import { revenueAreaSpline } from './chart-config';
import { useDashboard } from '../../utils/context';

HighchartsConversionPie(Highcharts);

function mapRevenueData(data) {
  const completedData = data?.filter(order => order.status === 'completed');
  const revenueToShow = completedData?.map(({ due_date, conversion_revenue, status, ...rest }, index) => {
    const hourToSec = dayjs(due_date).get('hour') * 3600;
    const minToSec = dayjs(due_date).minute() * 60;
    const secTotal = hourToSec + minToSec;

    const dayIndex = dayjs(due_date).day() === 0 ? 7 : dayjs(due_date).day();
    const xValue = (secTotal / 86400) + dayIndex;

    return status === 'completed' && {
      conversion_revenue,
      due_date,
      chartValue: [xValue, +conversion_revenue],
      // status,
      ...rest
    }
  })
  // console.log(revenueToShow)

  // TO DO separate to dedicated function 
  const totalRevenue = data?.reduce((accumulator, order) => accumulator + +order.conversion_revenue, 0);

  return { revenueToShow, totalRevenue };
}

function Revenue() {
  const [{ orders }] = useDashboard();
  const { revenueToShow, totalRevenue } = mapRevenueData(orders);

  const sortedRevenue = revenueToShow?.sort((a, b) => (a.chartValue[0] > b.chartValue[0]) ? 1 : -1)
  const el = document.getElementById('revenue');
  const revenueEl = document.getElementById('revenue-chart');

  // const  resize = React.useCallback(() => {
  //   revenueEl.width = el.clientWidth;
  // }, [el.clientWidth, revenueEl]);

  // React.useEffect(() => {
  //   window.addEventListener('resize', resize)

  //   return () => window.removeEventListener('resize');
  // }, [resize]);

  // console.log(el?.clientWidth, revenueEl?.clientWidth)

  return (
    <WidgetWrapper id="revenue">
      <CardHeader
        title="Revenue"
        rightComponent={<p>righty</p>}
      />
      <HighchartsReact
        id="revenue-chart"
        highcharts={Highcharts}
        options={revenueAreaSpline({
          data: sortedRevenue,
          width: el?.clientWidth
        })}
      />
    </WidgetWrapper>
  )
}

export default Revenue;