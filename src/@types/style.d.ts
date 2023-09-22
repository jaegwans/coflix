import 'styled-components';
import {
    BorderRadiusTypes,
    ColorsTypes,
    FontWeightTypes,
    LenTypes,
} from 'styles/Theme/theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: ColorsTypes;
        fontWeight: FontWeightTypes;
        borderRadius: BorderRadiusTypes;
        len: LenTypes;
    }
}
