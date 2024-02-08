import React, { useContext } from "react";
import { filteredContext } from "../../Context/FilteredContext";
import { binContext } from "../../Context/BinContext";

export default function ItemsNotInBin() {
  const { filteredData } = useContext(filteredContext);
  const { archieveData } = useContext(binContext);
  return (
    <>
      {archieveData.length === 0 && filteredData === archieveData && (
        <div className="bg-[#f5f5f5] flex flex-col justify-center items-center text-[#566368] p-3 text-sm">
          No Items within Bin
        </div>
      )}
    </>
  );
}
