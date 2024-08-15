import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { GlobalStyle } from "../src/shared/styles/GlobalStyle";
import type { Preview } from "@storybook/react";

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle,
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
