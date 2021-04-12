import * as React from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

import { useDashboard } from '../../utils/context';
import CardHeader from '../card-header';
import columns from './columns';

const TableWrapper = styled.div`
  grid-column: 2 / span 2;
`;

function Orders() {
  const [{ orders }] = useDashboard();

  return (
    <TableWrapper id="orders">
      <CardHeader title="Orders" />
      <Table
        columns={columns}
        dataSource={orders}
        // loading={}
        // bordered
        scroll={{ x: 320 }}
      />
    </TableWrapper>
  );
}

export default Orders;