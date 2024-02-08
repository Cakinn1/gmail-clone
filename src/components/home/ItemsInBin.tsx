import React, { useContext } from "react";
import { filterArchieveData } from "../../lib/helpers/filterArchieveData";
import { binContext } from "../../Context/BinContext";
import { filteredContext } from "../../Context/FilteredContext";
import { dataContext } from "../../Context/AppProvider";

export default function ItemsInBin() {
  const { data, setData } = useContext(dataContext);
  const { filteredData, setFilteredData } = useContext(filteredContext);
  const { archieveData, setArchieveData } = useContext(binContext);
  return (
    <>
      {filteredData === archieveData && archieveData.length > 0 && (
        <div className="bg-[#f5f5f5] flex flex-col justify-center items-center text-[#566368] p-3 text-sm ">
          <h1>
            Messages that have been in the bin for more than 30 days will be
            deleted automatically.
          </h1>
          <button
            onClick={() =>
              filterArchieveData(setArchieveData, setFilteredData, data)
            }
            className="font-bold hover:text-[#c04b37] duration-300"
          >
            Empty Bin Now
          </button>
        </div>
      )}
    </>
  );
}
