import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import * as Sentry from '@sentry/browser';
import { normalize } from 'styled-normalize';
import { GA_TRACKING_ID } from '../lib/gtag';

process.on('unhandledRejection', (err) => {
  Sentry.captureException(err);
});

process.on('uncaughtException', (err) => {
  Sentry.captureException(err);
});

const GlobalStyles = createGlobalStyle`
  ${normalize}

  html, body, #__next {
    height: 100%;
    min-height: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    letter-spacing: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <React.Fragment>
                <GlobalStyles />
                <App {...props} />
              </React.Fragment>,
            ),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="ru">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap&subset=cyrillic"
            rel="stylesheet"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
