import { useState } from "react";
import Header from "./components/Header";
import BurgerMenu from "./components/BurgerMenu";
import Overlay from "./components/Overlay";

function App() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div className="min-h-screen min-w-screen">
      <Header
        isBurgerOpen={isBurgerOpen}
        setIsBurgerOpen={setIsBurgerOpen}
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
      />
      <BurgerMenu isBurgerOpen={isBurgerOpen} />

      <Overlay
        isOverlayOpen={isOverlayOpen}
        setIsOverlayOpen={setIsOverlayOpen}
        setIsBurgerOpen={setIsBurgerOpen}
      />
    </div>
  );
}

export default App;
