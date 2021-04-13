import * as React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';

const Container = styled(Col)`
  padding: 2rem;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  
  $ div {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 980px) {
    margin-bottom: 2rem;
  }
`;

function WidgetWrapper(props) {
  return (
    <Container {...props} />
  );
}

export default WidgetWrapper;