import * as React from 'react';
import styled from 'styled-components';
import { useQueryParams, StringParam } from 'use-query-params';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsConversionPie from 'highcharts/highcharts-more';

import ChartWrapper from '../chart-wrapper';
import MonthPicker from '../month-picker';
import WidgetWrapper from '../widget-wrapper';
import CardHeader from '../card-header';
import { revenueAreaSpline } from './chart-config';
import { useDashboard } from '../../utils/context';
import transformRevenueData from '../../utils/helpers/map-revenue-data';
import useMediaQuery from '../../utils/media-queries';

HighchartsConversionPie(Highcharts);

const SubHeadingText = styled.p`
  color: #9C9C9C;
  font-weight: 600;
`;

const TotalRevenue = styled.p`
  font-weight: 700;
  font-size: 24px;
`;

function Revenue() {
  const [{ orders }] = useDashboard();
  const [{ revStart, revEnd }] = useQueryParams({
    revStart: StringParam,
    revEnd: StringParam
  });

  const width = useMediaQuery({
    desktopWidth: 600,
    smallDesktopWidth: 600,
    tabletWidth: 950,
    midMobileWidth: 620,
    mobileWidth: 320
  });
  const { revenueToShow, totalRevenue } = transformRevenueData({ orders, revStart, revEnd});
  const sortedRevenue = revenueToShow?.sort((a, b) => (a.chartValue[0] > b.chartValue[0]) ? 1 : -1);

  return (
    <WidgetWrapper id="revenue" xs={24} md={24} lg={24} xl={11}>
      <CardHeader
        title="Revenue"
        rightComponent={<MonthPicker />}
      />
      <ChartWrapper>
        <HighchartsReact
          id="revenue-chart"
          highcharts={Highcharts}
          options={revenueAreaSpline({
            data: sortedRevenue,
            width
          })}
        />
      </ChartWrapper>
      {totalRevenue && (
        <>
          <SubHeadingText>Total Revenue</SubHeadingText>
          <TotalRevenue>${totalRevenue}</TotalRevenue>
        </>
      )}
    </WidgetWrapper>
  );
}

export default Revenue;