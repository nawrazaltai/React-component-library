export default function Card(props) {
  const { title, imgSrc, description, href } = props;

  return (
    <div className="flex items-center flex-col w-64 h-96 border-2 border-white text-white font-semibold bg-gradient-to-r from-sky-600 to-sky-800 rounded-md overflow-hidden">
      <div
        className={`h-80 border-2 border-white w-80 rounded-full bg-slate-100 -mt-44 bg-cover bg-center`}
        style={{ backgroundImage: `url('${imgSrc}')` }}
      ></div>
      <div className="flex flex-col items-center mt-2">
        <h1 className="text-xl tracking-wider">{title}</h1>
        <span className="w-1/1 text-xs font-light text-center pt-2 px-3">
          {description}
        </span>
        <a
          className="border-2 border-white font-normal text-white bg-violet-600 rounded-md py-1 px-5 mt-5 hover:bg-white hover:text-violet-600"
          href={href}
        >
          Read More
        </a>
      </div>
    </div>
  );
}
