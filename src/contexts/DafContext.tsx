import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

import type { Makor } from "../types";

interface DafContextValue {
  addMakor: (makor: Makor) => void;
  mekorot: Makor[];
}

const DafContext = createContext<DafContextValue | undefined>(undefined);

function useDafContext() {
  const daf = useContext(DafContext);
  if (typeof daf === "undefined")
    throw new Error("useDafContext must be used within a DafProvider");
  return daf;
}

interface DafProviderProps {
  children: ReactNode;
}

function DafProvider({ children }: DafProviderProps) {
  const [mekorot, setMekorot] = useState<Makor[]>([]);

  function addMakor(makor: Makor) {
    setMekorot((prev) => [...prev, makor]);
  }

  const value = {
    addMakor,
    mekorot,
  };

  return <DafContext.Provider value={value}>{children}</DafContext.Provider>;
}

export { DafProvider, useDafContext };
