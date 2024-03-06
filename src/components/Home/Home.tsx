import React, { useContext, useEffect, useState } from "react";
import MailModal from "./MailModal";
import Emails from "./Emails";
import { filteredContext } from "../../Context/FilteredContext";
import { dataContext } from "../../Context/AppProvider";
import { binContext } from "../../Context/BinContext";
import { DataProps, ItemsInBinProps } from "../../types/typings";

export interface MailDataProps {
  sendToUser: string;
  sendToSubject: string;
  sendToMessage: string;
}

export default function Home() {
  const { filteredData, setFilteredData } = useContext(filteredContext);
  const { archieveData, setArchieveData } = useContext(binContext);
  const { data } = useContext(dataContext);
  const [mailData, setMailData] = useState<MailDataProps>({
    sendToUser: "",
    sendToSubject: "",
    sendToMessage: "",
  });

  function filterArchieveData() {
    setArchieveData([]);
    setFilteredData(data);
  }

  const itemsInBinProps = {
    filterArchieveData,
    filteredData,
    archieveData,
  };

  console.log(archieveData);
  return (
    <div className="relative flex flex-1">
      <MailModal mailData={mailData} setMailData={setMailData} />
      <div className="w-full">
        {archieveData.length === 0 ? (
          <ItemsNotInBin itemsInBinProps={itemsInBinProps} />
        ) : (
          <ItemsInBin itemsInBinProps={itemsInBinProps} />
        )}
        {filteredData.map((item) => (
          <Emails key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

function ItemsInBin(props: ItemsInBinProps) {
  const { itemsInBinProps } = props;
  return (
    <>
      {itemsInBinProps.filteredData === itemsInBinProps.archieveData &&
        itemsInBinProps.archieveData.length > 0 && (
          <div className="bg-[#f5f5f5] flex flex-col justify-center items-center text-[#566368] p-3 text-sm ">
            <h1>
              Messages that have been in the bin for more than 30 days will be
              deleted automatically.
            </h1>
            <button
              onClick={() => itemsInBinProps.filterArchieveData()}
              className="font-bold hover:text-[#c04b37] duration-300"
            >
              Empty Bin Now
            </button>
          </div>
        )}
    </>
  );
}

function ItemsNotInBin(props: ItemsInBinProps) {
  const { itemsInBinProps } = props;
  return (
    <>
      {itemsInBinProps.archieveData.length === 0 &&
        itemsInBinProps.filteredData === itemsInBinProps.archieveData && (
          <div className="bg-[#f5f5f5] flex flex-col justify-center items-center text-[#566368] p-3 text-sm">
            No Items within Bin
          </div>
        )}
    </>
  );
}
