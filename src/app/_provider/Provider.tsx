import React from "react";

import { MSWComponent } from "./MSWComponent";
import QueryClientComponent from "./QueryClientComponent";

type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <QueryClientComponent>
      {children}
      <MSWComponent />
    </QueryClientComponent>
  );
};

export default Provider;
