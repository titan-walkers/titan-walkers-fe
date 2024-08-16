import React from "react";

import { MSWComponent } from "./MSWComponent";
import QueryClientComponent from "./QueryClientComponent";
import { StyledComponentRegistry } from "./StyledComponentRegistry";
import ThemeProviderComponent from "./ThemeProviderComponent";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <ThemeProviderComponent>
      <QueryClientComponent>
        <StyledComponentRegistry>{children}</StyledComponentRegistry>
        <MSWComponent />
      </QueryClientComponent>
    </ThemeProviderComponent>
  );
};

export default Provider;
