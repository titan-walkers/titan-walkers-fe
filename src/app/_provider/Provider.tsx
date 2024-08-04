"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { MSWComponent } from "./MSWComponent";

const queryClient = new QueryClient();
type Props = {
  children: React.ReactNode;
};

const Provider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <MSWComponent />
    </QueryClientProvider>
  );
};

export default Provider;
