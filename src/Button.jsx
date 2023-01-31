export default function Button(props) {
  const { title, color, size, onClick, disabled } = props;

  const styles = {
    color: {
      light: "bg-slate-200 text-slate-800 hover:bg-slate-300 border-slate-800",
      dark: "bg-slate-900 text-white hover:bg-slate-800 border-slate-200",
      default: "bg-blue-500 text-white hover:bg-blue-300 border-white",
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
      onClick={() => onClick(title)}
      className={`${colorClass} ${sizeClass} ${
        disabled ? disabledClass : ""
      } flex justify-center items-center border-2 rounded-lg`}
    >
      {title}
    </button>
  );
}
