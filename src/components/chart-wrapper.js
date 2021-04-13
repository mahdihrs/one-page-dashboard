import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function ChartWrapper(props) {
  return <Wrapper {...props} />;
}

export default ChartWrapper;