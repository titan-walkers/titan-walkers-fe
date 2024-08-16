import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      main: string;
      sub: string;
      white: string;
      gray100: string;
      green200: string;
    };
  }
}
