import React, { useContext, useEffect } from "react";
import { deleteModalContext } from "../../Context/DeleteModalContext";
import { dataContext } from "../../Context/AppProvider";
import { binContext } from "../../Context/BinContext";
import { filterCurrentTask } from "../../lib/helpers/filterCurrentTask";
import { filterMail } from "../../lib/helpers/filterMail";
import { useLocation, useNavigate } from "react-router";

interface DeleteUserMailProps {
  id: number | undefined;
}

export default function DeleteUserMail(props: DeleteUserMailProps) {
  const { id } = props;
  const { setIsDeleteModalOpen } = useContext(deleteModalContext);
  const { setData, data } = useContext(dataContext);
  const { setArchieveData } = useContext(binContext);
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 bg-black text-black bg-opacity-60 w-full h-full">
      <div className="absolute p-6 space-y-4  bg-white rounded-md w-[400px]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="font-bold text-2xl">Delete Email</h1>
        <p className="text-[#67727e]">
          Are you sure you want to delete this email, This cannot be reversed.
        </p>
        <div className="flex mx-auto uppercase text-lg font-bold text-white ">
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className="w-[50%] hover:opacity-60 duration-300 p-3 rounded-md bg-[#67727e]"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              filterMail(setData, id, setArchieveData, data);
              setIsDeleteModalOpen(false);
              navigate("/");
            }}
            className="w-[50%] hover:opacity-60 duration-300 ml-4 rounded-md bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
