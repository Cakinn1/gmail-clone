import React, { useEffect, useState } from "react";
import { useContext, createContext, Provider } from "react";
import { DataProps } from "../lib/typings";
import { fetchDataWithTimeout } from "../lib/data";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDataWithTimeout();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log("mounted again");
  }, []);

  return (
    <dataContext.Provider value={{ data, setData }}>
      {children}
    </dataContext.Provider>
  );
}
