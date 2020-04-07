import { NextPage, NextPageContext } from 'next';
import styled from 'styled-components';
import React, { Fragment } from 'react';
import TextField from '@atlaskit/textfield';
import Button, { ButtonGroup } from '@atlaskit/button';
import Form, {
  CheckboxField,
  Field,
  FormFooter,
  HelperMessage,
  ErrorMessage,
  ValidMessage,
} from '@atlaskit/form';

const Wrapper = styled.div`
  background-color: #fafbfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  width: 100%;
`;

const Container = styled.div`
  margin-top: 40px;
  max-width: 280px;

  @media (min-width: 380px) {
    max-width: 345px;
  }

  width: 100%;
  height: 100%;
  flex: 1 0 0%;
  margin: auto;
  padding: 16px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 10px;
  box-sizing: border-box;
  color: rgb(94, 108, 132);
  margin: 0px auto 24px;
  padding: 32px 40px;
  background: rgb(255, 255, 255);
  border-radius: 3px;
`;

const Title = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 24px;
  color: rgb(94, 108, 132);
  font-size: 16px;
  font-weight: 700;
`;

export type LoginPageProps = {};

export const LoginPage: NextPage<LoginPageProps> = () => {
  const isServer = () => typeof window === `undefined`;
  const TelegramLoginWidget = () =>
    isServer() ? null : (
      <>
        <script
          async
          src="https://telegram.org/js/telegram-widget.js?7"
          data-telegram-login="streaming-hell_bot"
          data-size="small"
          data-request-access="write"
        ></script>
      </>
    );
  return (
    <Wrapper>
      <Container>
        <FormContainer>
          <Title>Войдите в свою учетную запись</Title>
          <TelegramLoginWidget />
        </FormContainer>
      </Container>
    </Wrapper>
  );
};

export default LoginPage;