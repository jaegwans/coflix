import { DefaultTheme } from 'styled-components';

const color = {
    white: '#ffffff', // text color
    black: '#000000',
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

const theme: DefaultTheme = {
    color,
    fontWeight,
    borderRadius,
};

export default theme;
