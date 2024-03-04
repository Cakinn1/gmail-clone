import React, { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoOptionsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { dataContext } from "../Context/AppProvider";
import { filteredContext } from "../Context/FilteredContext";
export default function Nav() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const { data } = useContext(dataContext);
  const { setFilteredData } = useContext(filteredContext);
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes("mail")) {
      setSearchInput("");
    }
    const filteredData = data.filter((item) => {
      const lowerSearchInput = searchInput.toLowerCase();
      const lowerEmail = item.email.toLowerCase();
      return lowerEmail.includes(lowerSearchInput);
    });
    setFilteredData(filteredData);
  }, [searchInput, data, location]);

  const leftItemProps = {
    isBurgerMenuOpen,
    setIsBurgerMenuOpen,
  };

  return (
    <div className="px-4 flex md:justify-between border-b flex-col md:flex-row  text-[#5f6368] items-center">
      <LeftItems leftItemProps={leftItemProps} />
      <div className="flex w-full  md:max-w-[44%]  flex-grow">
        <div className="bg-[#f5f5f5] flex items-center px-4 flex-1 rounded-md ">
          <div className="nav__hover--icon hover:bg-slate-200">
            <FaSearch />
          </div>
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter User Email"
            className="bg-[#f5f5f5] text-black placeholder:opacity-60 flex flex-1 text-[16px] px-2 focus:outline-none py-4"
          />
          <div className="nav__hover--icon hover:bg-slate-200">
            <IoOptionsSharp />
          </div>
        </div>
      </div>
      <RightItems />
    </div>
  );
}

interface Props {
  leftItemProps: {
    isBurgerMenuOpen: boolean;
    setIsBurgerMenuOpen: (value: boolean) => void;
  };
}
function LeftItems(props: Props) {
  const { leftItemProps } = props;
  return (
    <div className="flex items-center gap-x-4">
      <div
        className="nav__hover--icon relative"
        onClick={() =>
          leftItemProps.setIsBurgerMenuOpen(!leftItemProps.isBurgerMenuOpen)
        }
      >
        <GiHamburgerMenu className="text-2xl" />
        <BurgerMenu leftItemProps={leftItemProps} />
      </div>
      <Link to="/">
        <img className="w-32 object-cover" src="/assets/gmail.png" alt="" />
      </Link>
    </div>
  );
}

function RightItems() {
  return (
    <div className="md:flex gap-x-6 hidden  items-center">
      <div className="nav__hover--icon ">
        <FaTh className="text-lg" />
      </div>
      <div className="nav__hover--icon ">
        <FaBell className="text-lg" />
      </div>
      <div className="nav__hover--icon ">
        <FaUser className="text-3xl" />
      </div>
    </div>
  );
}

function BurgerMenu(props: Props) {
  const { leftItemProps } = props;
  return (
    <div
      className={`absolute left-0 -bottom-[120px] p-4 z-50 rounded-md bg-gray-300 w-[200px] h-[120px] duration-300 ${
        leftItemProps.isBurgerMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <h1>Figure what to put in here and correct background color</h1>
    </div>
  );
}
