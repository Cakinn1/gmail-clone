import React, { useState } from "react";
import { useContext, createContext, Provider } from "react";
import { DataProps } from "../lib/typings";



export interface ContextProps {
  data: DataProps[];
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>;
}

export const dataContext = createContext<ContextProps>({
  data: [],
  setData: () => [],
});

export default function AppProvider({ children }: { children: any }) {
  const [data, setData] = useState<DataProps[]>([]);

  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
}
