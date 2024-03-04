import React, { useEffect, useState } from "react";
import { useContext, createContext, Provider } from "react";
import { DataProps } from "../types/typings";
import useFetchData from "../hooks/useFetchData";

export interface ContextProps {
  data: DataProps[];
  setData: React.Dispatch<React.SetStateAction<DataProps[]>>;
}

export const dataContext = createContext<ContextProps>({
  data: [],
  setData: () => [],
});

export default function AppProvider({ children }: { children: any }) {
  const fetchedData = useFetchData();
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    setData(fetchedData.productData);
  }, [fetchedData.productData]);

  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
}
