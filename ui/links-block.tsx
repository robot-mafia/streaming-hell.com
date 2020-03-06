import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 8px 16px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const LinksBlock: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
