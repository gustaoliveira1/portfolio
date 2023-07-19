import { useContext } from "react";
import { CurrentPage } from "@/contexts/CurrentPage";

export function useCurrentPage() {
  return useContext(CurrentPage);
}
