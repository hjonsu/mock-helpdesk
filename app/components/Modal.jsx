"use client";
import { useState, useEffect, useRef } from "react";
import { FaNotesMedical } from "react-icons/fa6";
import NoticeForm from "./NoticeForm";

export default function Modal({}) {
  const [open, setOpen] = useState(false);
  // const ref = useRef(null);

  const onClick = () => {
    setOpen(!open);
  };

  // listens for enter key
  // useEffect(() => {
  //   const listener = (event, e) => {
  //     if (event.code === "Enter" || event.code === "NumpadEnter") {
  //       console.log("Enter key was pressed. Run your function.");
  //       event.preventDefault();
  //       onClick();
  //     }
  //   };
  //   document.addEventListener("keydown", listener);
  //   return () => {
  //     document.removeEventListener("keydown", listener);
  //   };
  // }, []);

  return (
    <>
      <FaNotesMedical
        id="bulletinForm"
        className="my-auto cursor-pointer scale-125 opacity-80 duration-300	transition-all hover:scale-150 hover:opacity-100"
        tabIndex={0}
        onClick={onClick}
        aria-describedby="Button to create new bulletin"
        aria-label="Create new bulletin"
      />

      <div
        className={
          open
            ? `fixed opacity-100 z-10 left-0 top-0 w-full	h-full overflow-auto bg-slate-700/60 animation duration-300	transition-opacity visible`
            : `fixed opacity-0 z-10 left-0 top-0 w-full	h-full overflow-auto bg-slate-700/60 duration-300	transition-opacity invisible`
        }
      >
        <div className="bg-[#cbd5e1] my-14 mx-auto p-4 max-w-md opacity-100">
          <span
            className="float-right text-lg text-semibold hover:text-black hover:cursor-pointer focus:text-black focus:cursor-pointer"
            onClick={onClick}
          >
            &times;
          </span>
          <NoticeForm />
        </div>
      </div>
    </>
  );
}
