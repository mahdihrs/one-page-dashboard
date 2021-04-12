import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  grid-column: ${props => props?.revenue && '3 / span 2'}
`;

function WidgetWrapper(props) {
  return (
    <Container {...props} />
  );
}

export default WidgetWrapper;