import * as React from 'react';
import DatePicker from 'react-datepicker';
import { Col } from 'antd';
import { useQueryParams, StringParam } from 'use-query-params';
import styled from 'styled-components';

import { DATE_PICKER } from '../utils/constants';
import { queryDateFormatter } from '../utils/helpers/common';

const { YEARS, MONTHS } = DATE_PICKER;

const Container = styled(Col)`
  display: flex;
  justify-content: center;

  & .react-datepicker {
    width: 450px;
    height: 450px;
  }
  & .react-datepicker__month-container {
    width: 100%;
    height: 100%;
  }

  & .react-datepicker__header {
    background-color: #FFFFFF;
  }

  & .react-datepicker__day, .react-datepicker__day-name {
    width: 2.75rem;
    height: 2.75rem;
    padding-top: .5rem;
  }
  & .react-datepicker__day--range-start, .react-datepicker__day--keyboard-selected, .react-datepicker__day--selected {
    padding-top: .5rem;
    border-radius: 50%;
    background-color: #8772B0;
  }
  & .react-datepicker__day--in-range {
    background-color: #8772B0;
    border-radius: 50%;
    padding-top: .5rem;
  }

  & button {
    border: 0;
    background-color: #FFFFFF;
  }
  & select {
    border: 0;
  }

  @media (max-width: 480px) {
    & .react-datepicker {
      width: 100%;
      height: 350px;
    }
    & .react-datepicker__day, .react-datepicker__day-name {
      width: 2rem;
      height: 2rem;
      padding-top: .2rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 30%;

  & button {
    margin-right: .5rem;
    margin-bottom: 1rem;
    padding: .3rem 1rem;
    border-radius: 4px;
    border-color: #E5E5E5;
    font-weight: 600;
  }

  @media (max-width: 480px) {
    left: 23%;
  }
`;

const BottomButtons = styled.button`
  background-color: ${props => props.filter ? '#82C341 !important;' : '#FFFFFF;'}
`;

function DatePickerComponent() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(null);
  const [, setQuery] = useQueryParams({
    startDate: StringParam,
    endDate: StringParam
  });

  const currentYear = new Date().getFullYear();

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleCancel = () => {
    setQuery({
      startDate: undefined,
      endDate: undefined
    });
    setStartDate(new Date());
    setEndDate(null);
  };
  
  const handleFinish = () => {
    setQuery({
      startDate: queryDateFormatter(startDate),
      endDate: queryDateFormatter(endDate)
    });
  };

  return (
    <Container xs={24} xl={8}>
      <DatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          decreaseYear,
          increaseYear,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          prevYearButtonDisabled
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "space-evenly"
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={MONTHS[new Date(date).getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(MONTHS.indexOf(value))
              }
            >
              {MONTHS.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>

            <button onClick={decreaseYear} disabled={prevYearButtonDisabled}>
              {"<"}
            </button>
            <select
              value={new Date(date).getFullYear()}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {YEARS.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <button onClick={increaseYear} disabled={new Date(date).getFullYear() === currentYear}>
              {">"}
            </button>
          </div>
        )}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        style={{ height: '400px', width: '400px' }}
      >
        <ButtonWrapper role="group">
          <BottomButtons onClick={handleCancel}>Cancel</BottomButtons>
          <BottomButtons filter="true" onClick={handleFinish}>Filter</BottomButtons>
        </ButtonWrapper>
      </DatePicker>
    </Container>
  );
}

export default DatePickerComponent;