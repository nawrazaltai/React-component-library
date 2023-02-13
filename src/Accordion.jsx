import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

export default function Accordion(props) {
  const { id, children, handleOpen, active, question } = props;
  return (
    <div className="flex flex-col w-1/3 mb-3 bg-gradient-to-r from-indigo-600 to-indigo-500">
      <div
        className={`flex border-2 border-slate-100 items-center justify-between text-stone-100 px-5 py-8 `}
      >
        <span className="font-bold text-lg">{question}</span>
        <span
          className="hover:cursor-pointer text-lg hover:text-orange-400"
          onClick={() => handleOpen(id)}
        >
          {active ? (
            <AiOutlineUp className="text-xl" />
          ) : (
            <AiOutlineDown className="text-xl" />
          )}
        </span>
      </div>
      {children}
    </div>
  );
}

function AccordionContent(props) {
  const { answer, active } = props;
  return (
    <div
      className={
        active
          ? `flex text-white px-3 py-5 bg-indigo-100 border-2 border-white border-t-0`
          : `hidden`
      }
    >
      <span className="text-base text-slate-800 tracking-wide px-2">
        {answer}
      </span>
    </div>
  );
}

Accordion.AccordionContent = AccordionContent;
