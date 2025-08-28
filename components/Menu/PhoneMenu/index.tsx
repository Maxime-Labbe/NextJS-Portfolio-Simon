import Menu from "..";
import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";

export default function PhoneMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <MenuButton isOpen={isOpen} />
      </button>
      {isOpen && (
        <div
          className={`absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-40`}
          onClick={() => setIsOpen(false)}
        >
          <Menu isOpen={isOpen} />
        </div>
      )}
    </div>
  );
}
