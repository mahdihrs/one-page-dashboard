import * as React from 'react';
import { Table, Col } from 'antd';
import dayjs from 'dayjs';
import { useQueryParams, StringParam } from 'use-query-params';
import styled from 'styled-components';

import { useDashboard } from '../../utils/context';
import CardHeader from '../card-header';
import columns from './columns';

const TableWrapper = styled(Col)`
  grid-column: 2 / span 2;
`;

function Orders() {
  const [{ orders }] = useDashboard();
  const [query] = useQueryParams({
    startDate: StringParam,
    endDate: StringParam
  });

  const ordersMapped = query.startDate && query.endDate ? orders?.filter(order => {
    const unixDueDate = dayjs(order.due_date).unix();
    const startDateUnix = dayjs(query.startDate).unix();
    const endDateUnix = dayjs(query.endDate).unix();
    return unixDueDate > startDateUnix && unixDueDate <= endDateUnix;
  }) : orders;

  return (
    <TableWrapper id="orders" xs={24} xl={15}>
      <CardHeader title="Orders" showRight={false} />
      <Table
        columns={columns}
        dataSource={ordersMapped}
        scroll={{ x: 320 }}
        pagination={{
          defaultPageSize: 5,
          pageSizeOptions: [5, 10, 20, 50]
        }}
      />
    </TableWrapper>
  );
}

export default Orders;