import React from "react";

type HeaderProps = {
  isBurgerOpen: boolean;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOverlayOpen: boolean;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header: React.FC<HeaderProps> = ({
  isBurgerOpen,
  setIsBurgerOpen,
  isOverlayOpen,
  setIsOverlayOpen,
}) => {
  return (
    <header className="border-b-2 border-black p-5 flex justify-between items-center">
      <h1>My React App</h1>
      <div
        onClick={() => {
          setIsBurgerOpen(!isBurgerOpen);
          setIsOverlayOpen(!isOverlayOpen);
        }}
        className="flex flex-col justify-between w-[2rem] h-[1.5rem]"
      >
        <div
          className={`w-[50%] h-[2px] bg-[#555f62] rounded-[5px] duration-[0.3s] ${
            isBurgerOpen ? "relative rotate-[45deg] left-[2px] top-[3px]" : ""
          }`}
        ></div>
        <div
          className={`w-[100%] h-[2px] bg-[#555f62] rounded-[5px] duration-[0.3s] ${
            isBurgerOpen ? "w-[100%] rotate-[-45deg]" : ""
          }`}
        ></div>
        <div
          className={`w-[70%] h-[2px] bg-[#555f62] rounded-[5px] duration-[0.3s] ${
            isBurgerOpen
              ? "relative translate-x-[59%] rotate-[45deg] w-[50%] right-[2px] bottom-[4px]"
              : ""
          }`}
        ></div>
      </div>
    </header>
  );
};

export default Header;
