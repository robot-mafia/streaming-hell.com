import App from 'next/app';
import Router from 'next/router';
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import * as Sentry from '@sentry/browser';
import { withApplicationInsights } from '../lib/applicationinsights';
import * as gtag from '../lib/gtag';
import { SiteLayout } from '../ui/layouts/site';

Sentry.init({
  dsn: 'https://bf3a72ec767d4f03bafcdc289a9ea10f@sentry.io/4032925',
});

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        </ThemeProvider>
      </>
    );
  }
}

export default withApplicationInsights({
  instrumentationKey: '08992eee-2c82-4a99-9239-7c7844a50f16',
  isEnabled: true, //process.env.NODE_ENV === 'production'
})(MyApp);
