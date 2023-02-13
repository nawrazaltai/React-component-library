import { useState } from "react";
import "./App.css";
import Accordion from "./Accordion";

export default function AccordionPage() {
  const [open, setOpen] = useState([
    {
      question: "What is React?",
      answer:
        "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript",
      active: false,
      id: 1,
    },
    {
      question: "How to get started with React?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim imperdiet porttitor. Vivamus quis luctus justo. Morbiconsequat fringilla justo. Duis id elit commodo, iaculis nibh id, ornare odio. Sed in ipsum diam. Fusce a enim placerat, molestie sapien in, bibendum nibh. Suspendisse nec ligula molestie nibh aliquet vulputate sed sodales mi. Pellentesque auctor sollicitudin venenatis.",
      active: false,

      id: 2,
    },
    {
      question: "Can I combine React with Tailwind?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim imperdiet porttitor.",
      active: false,

      id: 3,
    },
  ]);

  function handleOpen(id) {
    setOpen(
      open.map((item) => {
        if (item.id === id) {
          return { ...item, active: !item.active };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="bg-slate-500 h-screen flex flex-col items-center py-5">
      {open.map((item) => {
        return (
          <Accordion
            key={item.id}
            id={item.id}
            question={item.question}
            handleOpen={handleOpen}
            active={item.active}
          >
            <Accordion.AccordionContent
              answer={item.answer}
              active={item.active}
            />
          </Accordion>
        );
      })}
    </div>
  );
}
