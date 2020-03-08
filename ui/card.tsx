import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 24px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 6px 16px;
  background: white;
  border-radius: 6px;
`;

const Header = styled.div`
  font-weight: 700;
  color: black;
  font-size: 12px;
  text-align: left;
  padding: 16px 16px 0;
`;

export interface CardProps {
  title?: string;
}

const GetHeader = ({ title }: any) => {
  if (title) {
    return <Header>{title}</Header>;
  }
  return <div></div>;
};

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <Container>
      <GetHeader title={title}></GetHeader>
      {children}
    </Container>
  );
};
