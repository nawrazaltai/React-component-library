import { useState } from "react";
import "./App.css";
import Button from "./Button";
import Alerts from "./Alerts";
import Badges from "./Badges";
import Card from "./Card";
import { BsCheckCircle, BsInfoCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

// Obligatoriska Props: size, color, disabled
function App() {
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

  // Obligatoriska Props: color, icon, onDismiss
  const [alerts, setAlerts] = useState([
    {
      message: "success!".toUpperCase(),
      active: true,
      btnTitle: "Ok",
      description: "Your action was successful!",
      color: "success",
      icon: <BsCheckCircle />,
      id: 1,
    },
    {
      message: "error!".toUpperCase(),
      active: true,
      btnTitle: "Try again..",
      description: "Your action was not successful!",
      color: "error",
      icon: <RxCrossCircled />,
      id: 2,
    },
    {
      message: "information!".toUpperCase(),
      active: true,
      btnTitle: "Close",
      description: "This displays information.",
      color: "default",
      icon: <BsInfoCircle />,
      id: 3,
    },
  ]);

  function handleDismiss(id) {
    setAlerts(
      alerts.map((alert) => {
        if (alert.id === id) {
          return { ...alert, active: !alert.active };
        } else {
          return alert;
        }
      })
    );
  }

  // Obligatoriska Props: color, size, icon
  const badges = [
    {
      color: "success",
      icon: <BsCheckCircle />,
      size: "default",
    },
    {
      color: "default",
      icon: <BsInfoCircle />,
      size: "small",
    },
    {
      color: "failure",
      icon: <RxCrossCircled />,
      size: "large",
    },
  ];

  // Obligatoriska Props: href, imgAlt, imgSrc
  const cards = [
    {
      title: "Mount Fuji",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit ex tellus, ullamcorper molestie lacus sodales id. Duis et tortor eget quam ultricies aliquam non vitae massa. Quisque tristique, nisl a sollicitudin aliquet, diam tellus fringilla leo, et posuere odio nunc non lorem.",
      href: "#",
      imgAlt: "Picture of Mount Fuji in Japan.",
      imgSrc:
        "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];

  return (
    <div className="flex flex-col bg-gray-500 h-full">
      <div className="flex items-center w-screen h-24 gap-5 mt-4 pb-3 border-b-2 border-white">
        <h1 className="ml-4 text-xl text-white">Buttons:</h1>

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

      <div className="flex border-b-2 border-b-white items-center">
        <h1 className="ml-3 text-xl text-white">Alerts:</h1>
        {alerts.map((alert) => {
          return <Alerts key={alert.id} {...alert} onDismiss={handleDismiss} />;
        })}
      </div>
      <div className="flex items-center border-b-2 border-white">
        <h1 className="ml-4 text-xl text-white">Badges:</h1>
        {badges.map((badge) => {
          return (
            <Badges
              key={badge.color}
              color={badge.color}
              icon={badge.icon}
              size={badge.size}
            />
          );
        })}
      </div>

      <div className="m-5">
        {cards.map((card) => {
          return (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              href={card.href}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
