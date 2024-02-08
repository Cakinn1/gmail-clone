import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { DataProps } from "../lib/typings";
import { dataContext } from "./AppProvider";

interface FilteredContextProps {
  filteredData: DataProps[];
  setFilteredData: React.Dispatch<React.SetStateAction<DataProps[]>>;
}

export const filteredContext = createContext<FilteredContextProps>({
  filteredData: [],
  setFilteredData: () => [],
});

export default function FilteredContext({ children }: { children: ReactNode }) {
  const { data } = useContext(dataContext);
  const [filteredData, setFilteredData] = useState<DataProps[]>(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    <filteredContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </filteredContext.Provider>
  );
}
