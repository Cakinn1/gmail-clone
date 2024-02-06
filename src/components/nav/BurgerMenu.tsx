import React from "react";

interface BurgerMenuProps {
  isBurgerMenuOpen: boolean;
  setIsBurgerMenuOpen: (value: boolean) => void;
}
export default function BurgerMenu(props: BurgerMenuProps) {
  const { isBurgerMenuOpen, setIsBurgerMenuOpen } = props;
  return (
    <div
      className={`absolute left-0 -bottom-[120px] p-4 z-50 rounded-md bg-gray-300 w-[200px] h-[120px] duration-300 ${
        isBurgerMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <h1>Figure what to put in here and correct background color</h1>
    </div>
  );
}
