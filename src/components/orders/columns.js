import * as React from 'react';
import Tag from '../tags';
import { dateFormatter } from '../../utils/helpers';

const columns = [
  {
    title: 'Order Number',
    dataIndex: 'order_id',
    key: 'order_id',
    render: text => `#${text}`
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: text => <Tag text={text} />
  },
  {
    title: 'Operator',
    dataIndex: 'full_name',
    key: 'full_name'
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location'
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
    render: text => dateFormatter(text)
  },
  {
    title: 'Due Date',
    dataIndex: 'due_date',
    key: 'due_date',
    render: text => dateFormatter(text)
  }
]

export default columns;