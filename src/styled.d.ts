import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    background: string;
    colors: {
      title: string;
      profileborder: string;
      buttoncolor: string;
      buttonborder: string;
      buttontext: string;
      icons: string;
    }
  }
}