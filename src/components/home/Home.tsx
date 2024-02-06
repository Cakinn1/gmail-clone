import React, { useContext, useEffect, useState } from "react";
import MailModal from "./MailModal";
import { fetchDataWithTimeout } from "../../lib/data";
import { dataContext } from "../../Context/AppProvider";
import { addNewData } from "../../lib/helpers/addNewData";
import { DataProps } from "../../lib/typings";

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
  const { data, setData } = useContext(dataContext);

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
    <div className="ml-[320px] relative flex flex-1 border border-t-0">
      <h1>home</h1>
      <MailModal mailData={mailData} setMailData={setMailData} />
      {data.map((item) => (
        <div>
          <h1>{item.date}</h1>
          <h1>{item.email}</h1>
          <h1>{item.message}</h1>
          <h1>{item.subject}</h1>
        </div>
      ))}
    </div>
  );
}
