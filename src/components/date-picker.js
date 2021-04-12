import * as React from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

import { DATE_PICKER } from '../utils/constants';

const { YEARS, MONTHS } = DATE_PICKER;

const Container = styled.div`
  & .react-datepicker {
    width: 400px;
    height: 400px;
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
`;

function DatePickerComponent() {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(null);
  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const currentYear = new Date().getFullYear();

  // const years = [1990, 1991, 1992, 1993, 1994, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December"
  // ];
  return (
    <Container>
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
              justifyContent: "space-evenly",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              // value={months[getMonth(date)]}
              value={MONTHS[new Date(date).getMonth()]}
              // value={new Date(date).getMonth()}
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
              // value={getYear(date)}
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
        <ButtonWrapper>
          <button>Cancel</button>
          <button>Filter</button>
        </ButtonWrapper>
      </DatePicker>
    </Container>
  );
};

export default DatePickerComponent;