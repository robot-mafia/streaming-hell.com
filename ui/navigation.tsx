import React from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Avatar from '@atlaskit/avatar';

const Container = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--n0);
  color: var(--n500);
  padding: 0 20px;
  box-shadow: 0 1px 12px rgba(9, 30, 66, 0.16), 0 1px 0 rgba(9, 30, 66, 0.04);
  z-index: 101;
  box-sizing: border-box;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  color: #172b4d;
  font-size: 18px;
  font-weight: 800;
`;

const TitleText = styled.div`
  margin-left: 10px;
`;

const Login = styled.div`
  color: #42526e;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
`;

export const Navigation: React.FC = () => {
  return (
    <Container>
      <Title>
        <Avatar
          src={'/images/logo.jpg'}
          name="Logo"
          size="small"
          onClick={() => Router.push('/')}
        />
        <TitleText>Streaming Hell 🔥</TitleText>
      </Title>
    </Container>
  );
};
