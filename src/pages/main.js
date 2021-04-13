import * as React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';

import Users from '../components/users';
import Conversion from '../components/conversion';
import Revenue from '../components/revenue';
import Orders from '../components/orders';
import DatePicker from '../components/date-picker';
import { FIRST_DATA_FETCHED, useDashboard } from '../utils/context';
import useFetch from '../utils/custom-hooks';

const ChartsContainer = styled(Row)`
  margin: 2rem 1rem;
`;

function Main() {
  const [, dispatch] = useDashboard();
  const { response, loading } = useFetch();

  React.useEffect(() => {
    if (response) {
      dispatch({
        type: FIRST_DATA_FETCHED,
        users: response?.user_category,
        orders: response?.orders
      });
    }
  }, [response, dispatch]);

  return (
    <>
      {loading ?
        <h1>Loading dashboard data ...</h1> : (
          <>
            <ChartsContainer justify="space-between" >
              <Conversion />
              <Users />
              <Revenue />
            </ChartsContainer>
            <ChartsContainer justify="space-between" >
              <DatePicker />
              <Orders />
            </ChartsContainer>
          </>
        )
      }
    </>
  );
}

export default Main;