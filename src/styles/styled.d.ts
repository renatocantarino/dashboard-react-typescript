import 'styled-components';

//sobrescrita de libs
declare module 'styled-components' {
    export interface defaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;

            white: string;
            black: string;
            grey: string;

            sucess: string;
            info: string;
            warning: string
        }
    }
}