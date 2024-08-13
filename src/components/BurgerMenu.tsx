type BurgerMenuProps = {
  isBurgerOpen: boolean;
};

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isBurgerOpen }) => {
  return (
    <nav
      className={`absolute right-0 bg-red-500 h-[100%] w-[60%] z-10 ${
        isBurgerOpen
          ? "animate-slide-right-to-left"
          : "animate-slide-left-to-right"
      }`}
    ></nav>
  );
};

export default BurgerMenu;
