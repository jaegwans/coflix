import { DefaultTheme } from 'styled-components';

const len = {
    tabHeight: '4.375rem',
};

const color = {
    white: '#ffffff', // text color
    middleWhite: '#c2c2c2', // background color
    black: '#000000',
    background: '#131313',
    grey: '#6b6b6b',
};

const fontWeight = {
    light: 300,
    normal: 500,
    semibold: 600,
    bold: 700,
};

const borderRadius = {
    input: '17px',
    button: '15px',
    imgCard: '10px',
};

export type ColorsTypes = typeof color;
export type FontWeightTypes = typeof fontWeight;
export type BorderRadiusTypes = typeof borderRadius;
export type LenTypes = typeof len;

const theme: DefaultTheme = {
    color,
    fontWeight,
    borderRadius,
    len,
};

export default theme;
