export default function Button(props) {
  const { title, id, color, size, onClick, disabled = false } = props;

  const styles = {
    color: {
      light: "bg-slate-200 text-slate-800 hover:bg-slate-300 border-slate-800",
      dark: "bg-slate-900 text-white hover:bg-slate-800 border-slate-200",
      default:
        "bg-blue-500 text-white hover:bg-blue-300 border-white p-1 px-3 rounded-full font-semibold hover:text-blue-500 hover:border-blue-500 hover:bg-slate-100",
      success:
        "bg-green-600 text-base px-10 py-1 text-slate-100 font-semibold rounded-full hover:bg-slate-100 hover:text-green-600  hover:border-green-600",
      error:
        "bg-red-500 text-base px-10 py-1 text-slate-100 font-semibold rounded-full hover:bg-slate-100 hover:text-red-600  hover:border-red-600",
    },
    size: {
      small: "text-sm p-4",
      base: "text-base p-5",
      large: "text-lg p-7",
    },
  };

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];
  const disabledClass = "opacity-50 disabled pointer-events-none";

  return (
    <button
      onClick={() => {
        onClick(id);
      }}
      className={`${colorClass} ${sizeClass} ${
        disabled ? disabledClass : ""
      } flex justify-center items-center border-2 rounded-lg`}
    >
      {title}
    </button>
  );
}
