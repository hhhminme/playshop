import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/globalStyle';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,user-scalable=no,maximum-scale=1"
        />
      </Head>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <GlobalStyle />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
