"use client";

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const MenuContext = createContext();

// Menu provider
function Menu({ children }) {
  const [openName, setOpenName] = useState(null);

  const open = (name) => setOpenName(name);
  const close = () => setOpenName(null);

  return (
    <MenuContext.Provider value={{ openName, open, close }}>
      {children}
    </MenuContext.Provider>
  );
}

// Trigger for opening/closing menu
function Open({ children, opens }) {
  const { openName, open, close } = useContext(MenuContext);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && ref.current.contains(e.target)) return;
      if (openName === opens) close();
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openName, close, opens]);

  return (
    <span
      ref={ref}
      onClick={() => (openName === opens ? close() : open(opens))}
    >
      {children}
    </span>
  );
}

// Menu content / dropdown window
function Window({ children, name }) {
  const { openName, close } = useContext(MenuContext);
  if (name !== openName) return null;

  return createPortal(
    <div
      className="absolute top-17 left-4 bg-white shadow-lg rounded-xl p-4 z-50 min-w-[160px] max-w-xs
                 animate-[fadeScale_0.5s_ease-out]"
      onClick={(e) => e.stopPropagation()}
    >
      {cloneElement(children, { onCloseMenu: close })}
    </div>,
    document.body
  );
}

Menu.Open = Open;
Menu.Window = Window;

export default Menu;
