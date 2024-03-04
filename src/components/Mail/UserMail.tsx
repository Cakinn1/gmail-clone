import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import UserMailHeader from "./UserMailHeader";
import { dataContext } from "../../Context/AppProvider";
import { DataProps } from "../../types/typings";
import UserMailMessage from "./UserMailMessage";

export interface UserMailProps {
  currentElement: DataProps | null;
}

export default function UserMail() {
  const { id } = useParams();
  const { data } = useContext(dataContext);
  const [currentElement, setCurrentElement] = useState<DataProps | null>(null);

  useEffect(() => {
    if (id) {
      const findCurrentElement = data.find((item) => {
        return +item.id === +id;
      }) as DataProps;
      setCurrentElement(findCurrentElement);
    }
  }, [data]);

  return (
    <div className="bg-[#f5f5f5] flex flex-1">
      <div className="m-6 mb-0 p-10 flex flex-1 rounded-md bg-white shadow-lg ">
        <div className="w-full">
          <UserMailHeader currentElement={currentElement} />
          <UserMailMessage currentElement={currentElement} />
        </div>
      </div>
    </div>
  );
}
