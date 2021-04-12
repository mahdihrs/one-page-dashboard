import * as React from 'react';
import { Tag as LabelTag } from 'antd';
import styled from 'styled-components';

const TagText = styled.span`
  text-transform: capitalize;
`;

const TagWrapper = styled(LabelTag)`
  width: 100%;
  text-align: center;
  border-radius: 5px;
  padding: .3rem 1rem;
`;

function getLabelColor(text) {
  switch (text) {
    case 'pending':
      return '#E69849'
    case 'completed':
      return '#789764'
    case 'canceled':
      return '#D66D4B'
    default:
      throw new Error('Unidentified Label')
  }
}

function Tag({ text }) {
  return (
    <TagWrapper color={getLabelColor(text)}>
      <TagText>{text}</TagText>
    </TagWrapper>
  );
}

export default Tag;