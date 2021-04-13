import * as React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsConversionPie from 'highcharts/highcharts-more';

import WidgetWrapper from '../widget-wrapper';
import ChartWrapper from '../chart-wrapper';
import CardHeader from '../card-header';
import { conversionPie } from './chart-config';
import { useDashboard } from '../../utils/context';
import mapConversion from '../../utils/helpers/map-conversion';
import useMediaQuery from '../../utils/media-queries';

HighchartsConversionPie(Highcharts);

function Conversion() {
  const [{ orders }] = useDashboard();
  const width = useMediaQuery({
    desktopWidth: 250,
    smallDesktopWidth: 250,
    tabletWidth: 275,
    midMobileWidth: 400,
    mobileWidth: 200
  });
  const newOrders = React.useMemo(() => mapConversion(orders), [orders]);

  return (
    <WidgetWrapper id="conversion" xs={24} lg={11} xl={6}>
      <CardHeader
        title="Conversion"
      />
      <ChartWrapper>
        <HighchartsReact
          data-testid="conversion-chart"
          highcharts={Highcharts}
          options={conversionPie({
            data: newOrders,
            width
          })}
        />
      </ChartWrapper>
    </WidgetWrapper>
  );
}

export default Conversion;