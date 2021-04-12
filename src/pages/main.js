import * as React from 'react';
import styled from 'styled-components';

import Users from '../components/users';
import Conversion from '../components/conversion';
import Revenue from '../components/revenue';
import Orders from '../components/orders';
import DatePicker from '../components/date-picker';
import { FIRST_DATA_FETCHED, useDashboard } from '../utils/context';
import useFetch from '../utils/custom-hooks';

const TopWidgets = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: auto;
  grid-column-gap: 10px;
  grid-row-gap: 25px;

  @media (min-width: 1024px) {
    grid-template-columns: auto auto;
  }
  @media (min-width: 1440px) {
    grid-template-columns: auto auto auto auto;
  }
`;

const BottomWidgets = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 25px;
`;


function Main() {
  const [, dispatch] = useDashboard();
  const { response, loading, error } = useFetch();

  React.useEffect(() => {
    if (response) {
      dispatch({
        type: FIRST_DATA_FETCHED,
        users: response?.user_category,
        orders: response?.orders
      })
    }
  }, [response, dispatch])

  return (
    <>
      <TopWidgets justify="space-between">
        <Conversion />
        <Users />
        <Revenue />
      </TopWidgets>
      <BottomWidgets>
        <DatePicker />
        <Orders />
      </BottomWidgets>
    </>
  )
}

export default Main;