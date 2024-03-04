import React, { useContext, useState } from "react";
import { composeContext } from "../../Context/ComposeContext";
import { FaXmark } from "react-icons/fa6";
import { MailDataProps } from "./Home";
import InputFields from "./InputFields";
import { dataContext } from "../../Context/AppProvider";
import { DataProps } from "../../types/typings";
import { trimmedDateString } from "../../utils/constants";

interface MailModalProps {
  mailData: MailDataProps;
  setMailData: React.Dispatch<React.SetStateAction<MailDataProps>>;
}
export default function MailModal(props: MailModalProps) {
  const { mailData, setMailData } = props;
  const { isComposeOpen, setIsComposeOpen } = useContext(composeContext);
  const { setData, data } = useContext(dataContext);
  const [counter, setCounter] = useState<number>(1);

  function addNewMail() {
    const newData: DataProps = {
      id: counter,
      date: trimmedDateString,
      email: mailData.sendToUser,
      message: mailData.sendToMessage,
      subject: mailData.sendToSubject,
    };
    setCounter((prevCounter) => prevCounter + 1);
    setData([...data, newData]);
    setMailData({ sendToMessage: "", sendToSubject: "", sendToUser: "" });
    setIsComposeOpen(false);
  }

  const mailDataProps = {
    sendToUser: mailData.sendToUser,
    sendToSubject: mailData.sendToSubject,
    sendToMessage: mailData.sendToMessage,
    setMailData,
  };

  return (
    <div
      className={`${
        isComposeOpen ? "opacity-100" : "opacity-0"
      } duration-300 fixed bottom-0 right-12 shadow-md rounded-t-md z-50 w-[500px]`}
    >
      <MailHeader />
      <MailMainContent mailDataProps={mailDataProps} />
      <MailButton addNewMail={addNewMail} />
    </div>
  );
}

function MailHeader() {
  const { setIsComposeOpen } = useContext(composeContext);
  return (
    <div className="p-3 flex text-white justify-between items-center bg-[#303030] font-semibold text-sm rounded-t-md">
      <h1>New Message</h1>
      <FaXmark
        onClick={() => setIsComposeOpen(false)}
        className="text-2xl cursor-pointer hover:opacity-45 duration-300"
      />
    </div>
  );
}

interface MailMainContentProps {
  mailDataProps: {
    sendToUser: string;
    sendToSubject: string;
    sendToMessage: string;
    setMailData: React.Dispatch<React.SetStateAction<MailDataProps>>;
  };
}

function MailMainContent(props: MailMainContentProps) {
  const { mailDataProps } = props;

  function handleInput(propteryName: string, value: string) {
    mailDataProps.setMailData((prevData) => {
      return {
        ...prevData,
        [propteryName]: value,
      };
    });
  }
  
  return (
    <div>
      <InputFields
        value={mailDataProps.sendToUser}
        text="To"
        setOnChangeValue={(value) => handleInput("sendToUser", value)}
      />
      <InputFields
        value={mailDataProps.sendToSubject}
        text="Subject"
        setOnChangeValue={(value) => handleInput("sendToSubject", value)}
      />
      <InputFields
        value={mailDataProps.sendToMessage}
        isTextArea={true}
        text="Message"
        setOnChangeValue={(value) => handleInput("sendToMessage", value)}
      />
    </div>
  );
}

function MailButton(props: { addNewMail: () => void }) {
  const { addNewMail } = props;
  return (
    <div className="bg-[#303030] text-white p-3 ">
      <button
        onClick={() => addNewMail()}
        className="bg-blue-600 hover:opacity-45 duration-300 p-2 text-sm px-4 rounded-md"
      >
        Send
      </button>
    </div>
  );
}
