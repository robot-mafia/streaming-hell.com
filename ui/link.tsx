import React from 'react';
import styled from 'styled-components';

const LinkS = styled.a`
  display: block;
  width: 25%;
  margin: 10px 0px;
  text-decoration: none;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinkTitle = styled.div`
  font-weight: 600;
  color: black;
  font-size: 10px;
  margin-top: 8px;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export interface LinkProps {
  url: string;
  name: string;
}

export const Link: React.FC<LinkProps> = ({ children, url, name }) => {
  return (
    <LinkS href={url}>
      <LinkContainer>
        {children}
        <LinkTitle>{name}</LinkTitle>
      </LinkContainer>
    </LinkS>
  );
};
