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
import { useRouter, useSearchParams } from "next/navigation";

const ModalContext = createContext();

function Modal({ children }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");

  const [openName, setOpenName] = useState(modal);

  // KEEP MODAL IN SYNC WITH URL
  useEffect(() => {
    setOpenName(modal);
  }, [modal]);

  function open(name) {
    router.push(`?modal=${name}`, { scroll: false });
  }

  function close() {
    router.replace("/dashboard", { scroll: false });
  }

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { openName, open, close } = useContext(ModalContext);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && ref.current.contains(e.target)) return;
      if (openName === opensWindowName) close();
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [openName, close, opensWindowName]);

  return (
    <span
      ref={ref}
      onClick={() =>
        openName === opensWindowName ? close() : open(opensWindowName)
      }
    >
      {children}
    </span>
  );
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={close} // close when clicking outside
    >
      <div
        className="bg-background-secondary rounded-lg shadow-lg p-6 w-[90%] max-w-md max-h-[70vh] overflow-y-auto
                   animate-[fadeScale_0.5s_ease-out]"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
