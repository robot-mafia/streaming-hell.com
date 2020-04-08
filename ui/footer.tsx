import React from 'react';
import styled from 'styled-components';
import { MobileApps } from './mobile-apps/mobile-apps';

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  position: fixed;
  bottom: 0;
  height: 70px;
  margin-top: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--n500);
  padding: 0 20px;
  box-shadow: 0 1px 10px rgba(9, 30, 66, 0.16), 0 1px 0 rgba(9, 30, 66, 0.04);
  z-index: 101;
  box-sizing: border-box;

  @media (max-width: 670px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Copyright = styled.div`
  color: #86868b;
  font-size: 12px;
  font-weight: 500;
`;

export const Footer: React.FC = () => {
  return (
    <Container>
      <Copyright>
        Copyright © {new Date().getFullYear()} robotmafia Inc. All rights
        reserved.
        <br />
        <style jsx>
          {`
            @media (max-width: 380px) {
              br {
                display: none;
              }
            }
          `}
        </style>
        All rights to logos, trademarks, belong to their respective owners.
      </Copyright>
      <MobileApps />
    </Container>
  );
};
