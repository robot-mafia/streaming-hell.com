import { FC, Fragment, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Header } from '../ui/header/header';
import { Footer } from '../ui/footer/footer';

export interface DefaultProps {}

export const Default: FC<PropsWithChildren<DefaultProps>> = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>Streaming Hell</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e12b57" />
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main style={{ minHeight: 'calc(100vh - 4.5rem)' }}>
        <Header />
        {children}
      </main>
      <Footer />
    </Fragment>
  );
};
