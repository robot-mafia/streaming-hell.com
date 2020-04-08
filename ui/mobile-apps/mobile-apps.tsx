import React from 'react';
import styled from 'styled-components';
import { AppStore } from './appstore';
import { GooglePlay } from './google-play';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 670px) {
    display: none;
  }
`;

const Icon = styled.div`
  margin-bottom: -17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, margin-bottom 0.3s;

  &:hover {
    opacity: 1 !important;
    margin-bottom: 0;
  }

  ${Container}:hover & {
    opacity: 0.3;
  }

  margin-left: 15px;
`;

const IconText = styled.div`
  margin-top: 3px;
  color: #000000;
  font-size: 10px;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s;

  ${Icon}:hover & {
    opacity: 1;
  }
`;

export const MobileApps: React.FC = () => {
  return (
    <Container>
      <Icon>
        <AppStore />
        <IconText>Avalible soon</IconText>
      </Icon>
      <Icon>
        <GooglePlay />
        <IconText>Avalible soon</IconText>
      </Icon>
    </Container>
  );
};
