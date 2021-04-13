import * as React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsRadiusPie from 'highcharts/modules/variable-pie';

import ChartWrapper from '../chart-wrapper';
import WidgetWrapper from '../widget-wrapper';
import CardHeader from '../card-header';
import { usersRadiusPie } from './chart-config';
import { useDashboard } from '../../utils/context';
import { getPercentage } from '../../utils/helpers/common';
import useMediaQuery from '../../utils/media-queries';

HighchartsRadiusPie(Highcharts);

function Users() {
  const [{ users }] = useDashboard();
  const width = useMediaQuery({
    desktopWidth: 250,
    smallDesktopWidth: 250,
    tabletWidth: 275,
    midMobileWidth: 400,
    mobileWidth: 200
  });
  const totalUsersAllCategories = Object.values(users).reduce((accumulator, user) => accumulator + +user, 0);

  const userCategory = Object.keys(users)?.map(user => ({
    name: user,
    y: getPercentage({ value: +users[user], total: totalUsersAllCategories }),
    z: +users[user]
  }));

  return (
    <WidgetWrapper id="users" xs={24} lg={11} xl={6}>
      <CardHeader
        title="Users"
      />
      <ChartWrapper>
        <HighchartsReact
          highcharts={Highcharts}
          options={usersRadiusPie({ data: userCategory, width })}
        />
      </ChartWrapper>
    </WidgetWrapper>
  );
}

export default Users;