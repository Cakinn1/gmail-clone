import React, { useContext, useState } from "react";
import { composeContext } from "../../Context/ComposeContext";
import { FaXmark } from "react-icons/fa6";
import { MailDataProps } from "./Home";
import InputFields from "./InputFields";
import { addNewData } from "../../lib/helpers/addNewData";
import { dataContext } from "../../Context/AppProvider";
import { DataProps } from "../../lib/typings";
import { trimmedDateString } from "../../lib/constants";

interface MailModalProps {
  mailData: MailDataProps;
  setMailData: React.Dispatch<React.SetStateAction<MailDataProps>>;
}
export default function MailModal(props: MailModalProps) {
  const { mailData, setMailData } = props;
  const { isComposeOpen, setIsComposeOpen } = useContext(composeContext);
  const { setData } = useContext(dataContext);
  const [counter, setCounter] = useState<number>(1);

  const newData: DataProps = {
    id: counter,
    date: trimmedDateString,
    email: mailData.sendToUser,
    message: mailData.sendToMessage,
    subject: mailData.sendToSubject,
  };

  return (
    <div
      className={`${
        isComposeOpen ? "opacity-100" : "opacity-0"
      } duration-300 fixed bottom-0 right-12 shadow-md rounded-t-md z-50 w-[500px]`}
    >
      <div className="p-3 flex text-white justify-between items-center bg-[#303030] font-semibold text-sm rounded-t-md">
        <h1>New Message</h1>
        <FaXmark
          onClick={() => setIsComposeOpen(false)}
          className="text-2xl cursor-pointer hover:opacity-45 duration-300"
        />
      </div>
      <div>
        <InputFields
          value={mailData.sendToUser}
          text="To"
          setOnChangeValue={(value) => {
            return setMailData((prevData) => {
              return {
                ...prevData,
                sendToUser: value,
              };
            });
          }}
        />
        <InputFields
          value={mailData.sendToSubject}
          text="Subject"
          setOnChangeValue={(value) => {
            return setMailData((prevData) => {
              return {
                ...prevData,
                sendToSubject: value,
              };
            });
          }}
        />
        <InputFields
          value={mailData.sendToMessage}
          isTextArea={true}
          text="Message"
          setOnChangeValue={(value) => {
            return setMailData((prevData) => {
              return {
                ...prevData,
                sendToMessage: value,
              };
            });
          }}
        />
      </div>
      <div className="bg-[#303030] text-white p-3 ">
        <button
          onClick={() => {
            addNewData(newData, setData);
            setCounter((prevCounter) => prevCounter + 1);
          }}
          className="bg-blue-600 hover:opacity-45 duration-300 p-2 text-sm px-4 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
}
