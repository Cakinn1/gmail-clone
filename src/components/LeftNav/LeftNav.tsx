import React, { ReactElement, useContext, useEffect, useState } from "react";
import { FaAccessibleIcon, FaPlus } from "react-icons/fa";
import { ComposeContext, composeContext } from "../../Context/ComposeContext";
import { binContext } from "../../Context/BinContext";
import { dataContext } from "../../Context/AppProvider";
import { filteredContext } from "../../Context/FilteredContext";
import { useLocation, useNavigate } from "react-router";

interface NavItemsProps {
  icon: ReactElement;
  title: string;
  amount: number;
  handleSelect: (value: string) => void;
  isSelected: string;
}
const NavItems = (props: NavItemsProps) => {
  const { amount, icon, title, handleSelect, isSelected } = props;
  return (
    <div
      onClick={() => handleSelect(title)}
      className={`${
        isSelected === title
          ? "text-[#c04b37] font-bold bg-[#fcecec]"
          : "text-[#5f6368]"
      } flex  justify-between hover:font-bold cursor-pointer hover:text-[#c04b37] items-center p-2 px-6  duration-300 hover:bg-[#fcecec]  rounded-r-full`}
    >
      <div className="flex items-center gap-x-2">
        {icon}
        <h1>{title}</h1>
      </div>
      {amount}
    </div>
  );
};

export default function LeftNav() {
  const { isComposeOpen, setIsComposeOpen } = useContext(composeContext);
  const { data } = useContext(dataContext);
  const { archieveData } = useContext(binContext);
  const { setFilteredData } = useContext(filteredContext);
  const [isSelected, setIsSelected] = useState<string>("Inbox");

  const navigate = useNavigate();
  const location = useLocation();
  const handleSelect = (value: string) => {
    setIsSelected(value);

    if (location.pathname.includes("/mail")) {
      navigate("/");
    }

    if (value === "Bin") {
      setFilteredData(archieveData);
    } else {
      setFilteredData(data);
    }
  };

  console.log('cope')

  return (
    <div className=" fixed w-[320px] space-y-4 h-full flex flex-col pr-3">
      <div className="flex w-fit px-4 mt-4">
        <div
          onClick={() => setIsComposeOpen(!isComposeOpen)}
          className="flex  items-center font-semibold text-[#5f6368] text-sm gap-x-2 bg-white duration-300 cursor-pointer hover:bg-[#f5f5f5] shadow-md p-4  rounded-full "
        >
          <FaPlus />
          <h1>Compose</h1>
        </div>
      </div>

      <div className="w-full ">
        <NavItems
          isSelected={isSelected}
          handleSelect={handleSelect}
          amount={55}
          icon={<FaAccessibleIcon />}
          title="Inbox"
        />
        <NavItems
          isSelected={isSelected}
          handleSelect={handleSelect}
          amount={55}
          icon={<FaAccessibleIcon />}
          title="Starred"
        />
        <NavItems
          isSelected={isSelected}
          handleSelect={handleSelect}
          amount={55}
          icon={<FaAccessibleIcon />}
          title="Important"
        />
        <NavItems
          isSelected={isSelected}
          handleSelect={handleSelect}
          amount={55}
          icon={<FaAccessibleIcon />}
          title="Sent"
        />
        <NavItems
          isSelected={isSelected}
          handleSelect={handleSelect}
          amount={55}
          icon={<FaAccessibleIcon />}
          title="Bin"
        />
      </div>
    </div>
  );
}
