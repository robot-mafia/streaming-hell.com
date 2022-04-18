import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Default } from '../layouts/default';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  );
}

export default App;
