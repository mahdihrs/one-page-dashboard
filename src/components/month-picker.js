import * as React from 'react';
import { useQueryParams, StringParam } from 'use-query-params';
import dayjs from 'dayjs';
import { DatePicker } from 'antd';

import { queryMonthFormatter } from '../utils/helpers/common';

const { RangePicker } = DatePicker;

function MonthPicker() {
  const [query, setQuery] = useQueryParams({
    revStart: StringParam,
    revEnd: StringParam
  });

  const onChange = (dates) => {
    setQuery({
      revStart: queryMonthFormatter(dates?.[0]),
      revEnd: queryMonthFormatter(dates?.[1])
    });
  };

  return (
    <RangePicker
      picker="month"
      format="MMM-YYYY"
      onChange={onChange}
      value={query.revStart && [dayjs(query.revStart), dayjs(query.revEnd)]}
      allowClear={false}
    />
  );
}

export default MonthPicker;