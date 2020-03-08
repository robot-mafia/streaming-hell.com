import App from 'next/app';
import Router from 'next/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as Sentry from '@sentry/browser';
import * as gtag from '../lib/gtag';

Sentry.init({
  dsn: 'https://bf3a72ec767d4f03bafcdc289a9ea10f@sentry.io/4032925',
});

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default class MyApp extends App {
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
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
