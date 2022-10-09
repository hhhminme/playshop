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

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <GlobalStyle />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
