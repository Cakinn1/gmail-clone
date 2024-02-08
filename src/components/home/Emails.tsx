import React, { useContext, useState } from "react";
import { DataProps } from "../../lib/typings";
import { IoStar } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { filterCurrentTask } from "../../lib/helpers/filterCurrentTask";
import { dataContext } from "../../Context/AppProvider";
import { binContext } from "../../Context/BinContext";

export default function Emails(props: DataProps) {
  const { date, email, id, message, subject } = props;
  const { setData, data } = useContext(dataContext);
  const { setArchieveData } = useContext(binContext);
  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  return (
    <div className="flex justify-between items-center border-b flex-1 py-3 pr-8">
      <div
        className="flex items-center gap-x-6 "
        onClick={() => filterCurrentTask(setData, setArchieveData, data, id)}
      >
        <input type="checkbox" />
        {isFavourite ? <IoStar /> : <IoStarOutline />}
        {isFavourite ? <IoStar /> : <IoStarOutline />}
        {email}
      </div>

      <div>hello</div>

      <div>hello</div>

      {/* <div>date time</div> */}
    </div>
  );
}
