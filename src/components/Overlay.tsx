type OverlayProps = {
  isOverlayOpen: boolean;
  setIsOverlayOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Overlay: React.FC<OverlayProps> = ({
  isOverlayOpen,
  setIsOverlayOpen,
  setIsBurgerOpen,
}) => {
  return (
    <div
      className={`bg-black h-[100%] w-[100%] opacity-75 absolute cursor-pointer ${
        isOverlayOpen ? "block" : "hidden"
      }`}
      onClick={() => {
        setIsOverlayOpen(false);
        setIsBurgerOpen(false);
      }}
    ></div>
  );
};

export default Overlay;
