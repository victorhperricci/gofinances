import 'styled-components';

import defaultTheme from '../global/styles/theme';

type ThemeDefault = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeDefault {}
}