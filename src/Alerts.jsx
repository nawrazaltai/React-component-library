import Button from "./Button";

// Obligatoriska Props: color, icon, onDismiss
export default function Alerts(props) {
  const { color, id, icon, onDismiss, message, description, active, btnTitle } =
    props;

  const styles = {
    color: {
      success: "bg-green-600",
      error: "bg-red-500",
      default: "bg-blue-500",
    },
  };
  const colorClass = styles.color[color];

  //   const handleDismiss = () => {
  //     onDismiss(id);
  //   };

  return (
    <div className="">
      <div className={active ? "flex flex-col m-5" : "hidden"}>
        <div
          className={`${colorClass} flex justify-center rounded-t-md p-5 pb-3 text-6xl text-slate-100`}
        >
          {icon}
        </div>
        <div className="flex flex-col h-48 px-5 pt-3 rounded-b-md items-center text-slate-900 bg-gray-200 justify-around">
          <h2 className="font-bold tracking-widest text-2xl ">{message}</h2>
          <span className="tracking-wider pb-10 whitespace-nowrap">
            {description}
          </span>

          {/* Egen knapp */}
          {/* <button
            // onClick={handleDismiss}
            onClick={() => onDismiss(id)}
            className={`${colorClass} text-base px-10 py-1 text-slate-100 font-semibold rounded-full`}
          >
            {btnTitle}
          </button> */}

          {/* Återanvänd knapp-komponent */}
          <Button title={btnTitle} color={color} id={id} onClick={onDismiss} />
        </div>
      </div>
    </div>
  );
}
