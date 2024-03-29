"use client";
import { useState } from "react";
import { FaNotesMedical } from "react-icons/fa6";
import NoticeForm from "./NoticeForm";

export default function Modal({}) {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(!open);
  };

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
            ? `fixed opacity-100 z-10 left-0 top-0 w-full	h-full overflow-auto bg-slate-700/60 animation duration-500	transition-opacity visible`
            : `fixed opacity-0 z-10 left-0 top-0 w-full	h-full overflow-auto bg-slate-700/60 duration-500	transition-opacity invisible`
        }
      >
        <div className="bg-transparent my-14 mx-auto p-8 max-w-md opacity-100">
          <span
            className="float-right text-lg text-semibold text-gray-600 hover:text-black hover:cursor-pointer focus:text-black focus:cursor-pointer p-4"
            onClick={onClick}
          >
            &times;
          </span>
          <NoticeForm onClick={(event) => onClick()} />
        </div>
      </div>
    </>
  );
}
