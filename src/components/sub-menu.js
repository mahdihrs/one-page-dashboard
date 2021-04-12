import * as React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';

const SubMenuComponent = styled.section`
  background-color: #F5F5F5;
  text-align: right;
  padding: 20px 1rem;
  font-weight: 600;
`;

function SubMenu() {
  return (
    <SubMenuComponent>
      {dayjs(new Date()).format('D MMMM YYYY')}
    </SubMenuComponent>
  );
}

export default SubMenu