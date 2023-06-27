import { createGlobalStyle } from 'styled-components';
import theme from './Theme/theme';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, html {
        width: 100%;
        height: 100%;
        background-color: ${theme.color.background};
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        color: #333;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    button {
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }
    input {
        border: none;
        outline: none;
    }
    ul, ol, li {
        list-style: none;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Noto Sans KR', sans-serif;
    }

`;
export default GlobalStyle;
