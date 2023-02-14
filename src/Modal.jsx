import { useState } from "react";
import Button from "./Button";

// Obligatoriska Props: show, onClose, size
// Obligatoriska komponenter: Modal, Modal.Header, Modal.Body, Modal.Footer

export default function Modal(props) {
  const { children, show, size, openModal, id } = props;

  const styles = {
    size: {
      default:
        "bg-slate-800 border border-slate-100 opacity-100 absolute w-1/3 mt-5 z-10 text-white h-fit rounded-xl flex flex-col items-center justify-between",
    },
  };

  const sizeClass = styles.size[size];

  return (
    <div className="h-screen  flex justify-center items-start">
      {/* <button
        className={`border-2 p-2 z-0 mt-5 w-32 rounded-md bg-slate-800 text-white`}
        onClick={openModal}
      >
        Open Modal
      </button> */}
      <div className="mt-3">
        <Button
          title={"Open Modal"}
          color={"default"}
          id={id}
          onClick={openModal}
        />
      </div>

      <div
        className={
          show
            ? `hidden`
            : "flex justify-center items-top absolute p-0 m-0 w-full h-screen bg-black bg-opacity-80"
        }
      >
        <div className={sizeClass}>{children}</div>
      </div>
    </div>
  );
}

function ModalHeader(props) {
  const { onClose, title } = props;
  return (
    <span className="flex py-5 w-full border-b items-center border-slate-200 px-5">
      <h1 className="mr-auto">{title}</h1>{" "}
      <span
        className="cursor-pointer text-sm hover:text-red-400"
        onClick={onClose}
      >
        &#9587;
      </span>
    </span>
  );
}

Modal.ModalHeader = ModalHeader;

function ModalBody(props) {
  const { bodyTitle, mainInfo, description } = props;

  return (
    <div className="flex flex-col px-5 pt-5 gap-3 pb-3">
      <h2 className="text-xl pb-1 ">{bodyTitle}</h2>
      <p className="font-light text-white text-md">{mainInfo}</p>
      <p className="font-light text-white text-md">{description}</p>
    </div>
  );
}

Modal.ModalBody = ModalBody;

function ModalFooter(props) {
  const { onClose } = props;
  return (
    <div className="border-t border-slate-200 w-full flex justify-center pt-4 pb-3">
      {/* <button
        className="py-1 px-6 mb-2 rounded-sm bg-slate-200 font-semibold text-slate-800 border-2 border-slate-200"
        onClick={onClose}
      >
        Ok
      </button> */}
      <Button onClick={onClose} title={"Ok"} color={"light"} size={"small"} />
    </div>
  );
}

Modal.ModalFooter = ModalFooter;
