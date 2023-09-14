import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/Theme/theme';
import { RecoilRoot } from 'recoil';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import React from 'react';

//https://velog.io/@cjy0029/React-Query-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC2
export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());
    return (
        <>
            <ThemeProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <Hydrate state={pageProps.dehydratedState}>
                        <RecoilRoot>
                            <GlobalStyle />
                            <Component {...pageProps} />
                            <ReactQueryDevtools
                                initialIsOpen={false}
                                position="bottom-right"
                            />
                        </RecoilRoot>
                    </Hydrate>
                </QueryClientProvider>
            </ThemeProvider>
        </>
    );
}
