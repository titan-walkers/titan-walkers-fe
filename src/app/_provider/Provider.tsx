import React from "react";

import { MSWComponent } from "./MSWComponent";
import QueryClientComponent from "./QueryClientComponent";
import { StyledComponentRegistry } from "./StyledComponentRegistry";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <QueryClientComponent>
      <StyledComponentRegistry>{children}</StyledComponentRegistry>
      <MSWComponent />
    </QueryClientComponent>
  );
};

export default Provider;
