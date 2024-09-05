"use client";

import { theme } from "@/shared/styles/theme";
import { ThemeProvider } from "styled-components";

const ThemeProviderComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
