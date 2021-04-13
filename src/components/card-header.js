import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

const RightComponent = styled.div`
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  font-weight: 600;
  padding: .3rem;
  width: 32px;
  height: 32px;
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function DefaultRightHeader() {
  return (
    <RightComponent>
      <span>...</span>
    </RightComponent>
  );
}

function CardHeader({ title, rightComponent: RightComponent, showRight = true }) {
  return (
    <CardHeaderWrapper>
      <div>
        <Title>{title}</Title>
      </div>
      {showRight && (
        <div>
          {RightComponent || <DefaultRightHeader />}
        </div>
      )}
    </CardHeaderWrapper>
  );
}

CardHeader.propTypes = {
  title: PropTypes.string,
  rightComponent: PropTypes.node,
  showRight: PropTypes.bool
};

export default CardHeader;