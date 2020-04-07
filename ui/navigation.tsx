import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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
  margin-top: -4px;
  display: flex;
  align-items: center;
  color: #172b4d;
  font-size: 18px;
  font-weight: 800;
`;

const TitleText = styled.div`
  margin-top: 2px;
  margin-left: 3px;
`;

const Login = styled.div`
  color: #42526e;
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
`;

const Logo = styled.img`
  height: auto;
  max-height: 47px;
  max-width: 100%;
`;

export const Navigation: React.FC = () => {
  return (
    <Container>
      <Title>
        <Link href="/">
          <Logo src={'/images/logo.svg'} />
        </Link>
        <TitleText>Streaming Hell</TitleText>
      </Title>
    </Container>
  );
};
