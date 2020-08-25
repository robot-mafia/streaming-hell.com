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
  margin-bottom: ${props => (props.isAvalible ? '0' : '-17px')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, margin-bottom 0.3s;

  &:hover {
    opacity: ${props => (props.isAvalible ? '1 !important' : '0.5 !important')};
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

const Link = styled.a`
  display: inline-flex;
`;

export const MobileApps: React.FC = () => {
  return (
    <Container>
      <Icon>
        <AppStore />
        <IconText>Avalible soon</IconText>
      </Icon>
      <Icon isAvalible>
        <Link
          target="_blank"
          href="https://play.google.com/store/apps/details?id=io.robotmafia.streaminghell"
        >
          <GooglePlay />
        </Link>
      </Icon>
    </Container>
  );
};
