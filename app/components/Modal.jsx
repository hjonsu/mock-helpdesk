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
        className="my-auto cursor-pointer scale-125"
        onClick={onClick}
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
