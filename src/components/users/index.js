import * as React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsRadiusPie from 'highcharts/modules/variable-pie';

import WidgetWrapper from '../widget-wrapper';
import CardHeader from '../card-header';
import { usersRadiusPie } from './chart-config';

HighchartsRadiusPie(Highcharts);

function Users() {
  const el = document.getElementById('users');
  const width = el?.clientWidth;

  return (
    <WidgetWrapper id="users">
      <CardHeader
        title="Users"
        rightComponent={<p>righty</p>}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={usersRadiusPie({ width })}
      />
    </WidgetWrapper>
  );
}

export default Users;