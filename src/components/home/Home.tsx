import React, { useContext, useEffect, useState } from "react";
import MailModal from "./MailModal";
import { fetchDataWithTimeout } from "../../lib/data";
import { dataContext } from "../../Context/AppProvider";
import { addNewData } from "../../lib/helpers/addNewData";
import { DataProps } from "../../lib/typings";
import Emails from "./Emails";
import { filteredContext } from "../../Context/FilteredContext";
import { binContext } from "../../Context/BinContext";
import { filterArchieveData } from "../../lib/helpers/filterArchieveData";
import ItemsInBin from "./ItemsInBin";
import ItemsNotInBin from "./ItemsNotInBin";

export interface MailDataProps {
  sendToUser: string;
  sendToSubject: string;
  sendToMessage: string;
}

export default function Home() {
  const [mailData, setMailData] = useState<MailDataProps>({
    sendToUser: "",
    sendToSubject: "",
    sendToMessage: "",
  });
  const { setData } = useContext(dataContext);
  const { filteredData } = useContext(filteredContext);

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
  }, []);

  return (
    <div className="ml-[320px] relative flex flex-1">
      <MailModal mailData={mailData} setMailData={setMailData} />
      <div className="w-full">
        <ItemsInBin />
        <ItemsNotInBin />
        {filteredData.map((item) => (
          <Emails key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
