"use client";

import { pageTypes } from "@/types/pagesTypes";
import { ReactNode, createContext, useState } from "react";

export const CurrentPage = createContext({
  page: pageTypes.HOME,
  setPage: (value: pageTypes) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function CurrentPageProvider({ children }: ProviderProps) {
  const [page, setPage] = useState(pageTypes.HOME);

  return (
    <CurrentPage.Provider value={{ page, setPage }}>
      {children}
    </CurrentPage.Provider>
  );
}
