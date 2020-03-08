import App from 'next/app';
import Router from 'next/router';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <style jsx global>{`
          body {
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            letter-spacing: 0px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            height: 100%;
          }
        `}</style>
      </ThemeProvider>
    );
  }
}
