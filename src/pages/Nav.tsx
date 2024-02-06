import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaTh } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoOptionsSharp } from "react-icons/io5";
import BurgerMenu from "../components/Nav/BurgerMenu";
export default function Nav() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState<boolean>(false);
  return (
    <div className="px-4 flex md:justify-between border-b flex-col md:flex-row  text-[#5f6368] items-center">
      <div className="flex items-center gap-x-4">
        <div
          className="nav__hover--icon relative"
          onClick={() => setIsBurgerMenuOpen(!isBurgerMenuOpen)}
        >
          <GiHamburgerMenu className="text-2xl" />
          <BurgerMenu
            isBurgerMenuOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
          />
        </div>
        <img className="w-32 object-cover" src="/assets/gmail.png" alt="" />
      </div>

      <div className="flex w-full  md:max-w-[44%]  flex-grow">
        <div className="bg-[#f5f5f5] flex items-center px-4 flex-1 rounded-md ">
          <div className="nav__hover--icon hover:bg-slate-200">
            <FaSearch />
          </div>
          <input
            type="text"
            placeholder="Enter User Email"
            className="bg-[#f5f5f5] text-black placeholder:opacity-60 flex flex-1 text-[16px] px-2 focus:outline-none py-4"
          />
          <div className="nav__hover--icon hover:bg-slate-200">
            <IoOptionsSharp />
          </div>
        </div>
      </div>
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
    </div>
  );
}
