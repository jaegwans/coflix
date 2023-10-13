import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/Theme/theme';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';
import { RecoilEnv } from 'recoil';
import HeadMeta from '@/components/common/HeadMeta';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());
    return (
        <>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <RecoilRoot>
                            <HeadMeta />
                            <GlobalStyle />
                            <Component {...pageProps} />
                        </RecoilRoot>
                    </Hydrate>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
}
