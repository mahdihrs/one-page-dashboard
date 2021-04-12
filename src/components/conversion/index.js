import * as React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsConversionPie from 'highcharts/highcharts-more';

import WidgetWrapper from '../widget-wrapper';
import CardHeader from '../card-header';
import { conversionPie } from './chart-config';
import { useDashboard } from '../../utils/context';

HighchartsConversionPie(Highcharts);

// TO DO : moved to dedicated file
function mapConversion(data) {
  let newOrders = [];

  data?.forEach((order) => {
    const orderAvailable = newOrders.findIndex(no => no.name === order.conversion_item);
    if (orderAvailable !== -1) {
      newOrders[orderAvailable] = {
        name: newOrders[orderAvailable].name,
        y: newOrders[orderAvailable].y + +order.conversion_revenue
      }
    } else {
      newOrders = [
        ...newOrders,
        {
          name: order.conversion_item,
          y: +order.conversion_revenue
        }
      ]
    }
  });

  return newOrders;
}

function Conversion() {
  const [{ orders }] = useDashboard();
  const newOrders = React.useMemo(() => mapConversion(orders), [orders]);
  // TO DO : make dedicated helper to get width
  const el = document.getElementById('conversion');
  const width = el?.clientWidth;

  return (
    <WidgetWrapper id="conversion">
      <CardHeader
        title="Conversion"
        rightComponent={<p>righty</p>}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={conversionPie({
          data: newOrders,
          width
        })}
      />
    </WidgetWrapper>
  );
}

export default Conversion;