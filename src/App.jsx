import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./Button";

function App() {
  function handleClick(title) {
    console.log("Button: " + title);
    alert("Hej");
  }

  const buttons = [
    {
      title: "Small",
      color: "light",
      size: "small",
      disabled: false,
    },
    {
      title: "Disabled base",
      color: "default",
      size: "base",
      disabled: true,
    },
    { title: "Large", color: "dark", size: "large", disabled: false },
  ];

  return (
    <div className=" flex bg-gray-500 h-screen justify-center">
      <div className="flex h-10 gap-5">
        {buttons.map((button) => {
          return (
            <Button
              key={button.title}
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

export default App;
