import Modal from "./Modal";
import { useState } from "react";

export default function ModalPage() {
  const [show, setShow] = useState(true);

  const modals = [
    {
      title: "Modal Header",
      bodyTitle: "Modal Body",
      mainInfo:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim imperdiet porttitor. Vivamus quis luctus justo. Morbiconsequat fringilla justo. Duis id elit commodo, iaculis nibh id, ornare odio. Sed in ipsum diam. Fusce a enim placerat, molestie sapien in, bibendum nibh. Suspendisse nec ligula molestie nibh aliquet vulputate sed sodales mi. Pellentesque auctor sollicitudin venenatis. Maecenas tortor nisi, sagittis et lacinia ac, tincidunt vitae nulla.",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim imperdiet porttitor. Vivamus quis luctus justo.",
      size: "default",
      active: show,
      id: 1,
    },
  ];

  function openModal() {
    setShow(!show);
    console.log("openModal Called");
  }

  function onClose() {
    setShow(!show);
    console.log("OnClose Called");
  }

  return (
    <div className="bg-slate-500 h-screen">
      {modals.map((modal) => {
        return (
          <Modal
            key={modal.id}
            id={modal.id}
            size={modal.size}
            show={show}
            openModal={openModal}
          >
            <Modal.ModalHeader title={modal.title} onClose={onClose} />
            <Modal.ModalBody
              mainInfo={modal.mainInfo}
              bodyTitle={modal.bodyTitle}
              description={modal.description}
            />
            <Modal.ModalFooter onClose={onClose} />
          </Modal>
        );
      })}
    </div>
  );
}
