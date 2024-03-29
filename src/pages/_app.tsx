import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '../styles/ThemeProvider';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
