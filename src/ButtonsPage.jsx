import Button from "./Button";

export default function ButtonsPage() {
  function handleClick(id) {
    console.log("Button: " + id);
  }

  const buttons = [
    {
      title: "Small light",
      color: "light",
      size: "small",
      disabled: false,
      id: 1,
    },
    {
      title: "Disabled base",
      color: "default",
      size: "base",
      disabled: true,
      id: 2,
    },
    {
      title: "Large dark",
      color: "dark",
      size: "large",
      disabled: false,
      id: 3,
    },
  ];

  return (
    <div className="flex flex-col bg-slate-500 w-full h-screen">
      <div className="flex items-center justify-center h-24 gap-5 mt-4">
        {buttons.map((button) => {
          return (
            <Button
              key={button.title}
              id={button.id}
              onClick={handleClick}
              title={button.title}
              color={button.color}
              size={button.size}
              disabled={button.disabled}
            />
          );
        })}
      </div>
    </div>
  );
}
