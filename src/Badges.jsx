export default function Badges(props) {
  const { color, icon, size } = props;

  const styles = {
    color: {
      success: "bg-green-600 text-slate-100",
      default: "bg-sky-600 text-slate-200",
      failure: "bg-red-600 text-slate-200 ",
    },
    size: {
      small: "text-sm p-3",
      default: "p-5",
      large: "text-xl p-7",
    },
  };

  const colorClass = styles.color[color];
  const sizeClass = styles.size[size];

  return (
    <div
      className={`flex items-center gap-1 border-2 border-slate-200 rounded-md m-5 ${colorClass} ${sizeClass}`}
    >
      <span>{icon}</span>
      <p>{color}</p>
    </div>
  );
}
