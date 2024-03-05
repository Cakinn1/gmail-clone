import { FaCaretRight, FaTrashAlt } from "react-icons/fa";
import useUpperCase from "../../hooks/useUpperCase";
import { UserMailProps } from "./UserMail";
import { useContext, useState } from "react";
import { deleteModalContext } from "../../Context/DeleteModalContext";
import DeleteUserMail from "../modals/DeleteUserMail";

// cope commit
export default function UserMailHeader(props: UserMailProps) {
  const { currentElement } = props;
  const { isDeleteModalOpen, setIsDeleteModalOpen } =
    useContext(deleteModalContext);
  const upperCaseSubject = useUpperCase({ str: currentElement?.subject });

  return (
    <div className="flex justify-between items-center border-b pb-4 ">
      <div className="flex gap-x-4 items-center">
        <h1 className="text-2xl">{upperCaseSubject}</h1>
        <FaCaretRight className="text-[#e8ab02] text-2xl" />
        <h2>
          {currentElement &&
            currentElement?.email.toUpperCase().slice(0, 1) +
              currentElement?.email.slice(1)}
        </h2>
      </div>
      <div className="flex gap-x-4 items-center">
        <h1 className="text-[#808080] text-[12px]">{currentElement?.date}</h1>
        <FaTrashAlt
          onClick={() => setIsDeleteModalOpen(!isDeleteModalOpen)}
          className="hover:text-red-500 duration-300 cursor-pointer"
        />
      </div>
      {isDeleteModalOpen && <DeleteUserMail id={currentElement?.id} />}
    </div>
  );
}
