import GlobalStyle from '@/styles/GlobalStyle';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/Theme/theme';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <RecoilRoot>
                    <GlobalStyle />
                    <Component {...pageProps} />
                </RecoilRoot>
            </ThemeProvider>
        </>
    );
}
