import React, { createContext, useState } from "react";
import { DataProps } from "../lib/typings";

export interface BinContextProps {
  archieveData: DataProps[];
  setArchieveData: React.Dispatch<React.SetStateAction<DataProps[]>>;
}

export const binContext = createContext<BinContextProps>({
  archieveData: [],
  setArchieveData: () => [],
});

export default function BinContext({children}: {children: any}) {
    const [archieveData, setArchieveData] = useState<DataProps[]>([])

  return (
    <binContext.Provider value={{archieveData, setArchieveData}}>
        {children}
    </binContext.Provider>
  )
}
