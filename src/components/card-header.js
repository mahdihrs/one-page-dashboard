import * as React from 'react';
import styled from 'styled-components';

const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

function CardHeader({ title, rightComponent: RightComponent }) {
  return (
    <CardHeaderWrapper>
      <div>
        <Title>{title}</Title>
      </div>
      <div>
        {RightComponent}
      </div>
    </CardHeaderWrapper>
  );
}

export default CardHeader;