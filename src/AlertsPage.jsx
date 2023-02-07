import Alerts from "./Alerts";
import { useState } from "react";
import { BsCheckCircle, BsInfoCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

export default function AlertsPage() {
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

  return (
    <div className="flex border-b-2 border-b-white items-top justify-center bg-slate-500 h-screen w-screen">
      {alerts.map((alert) => {
        return <Alerts key={alert.id} {...alert} onDismiss={handleDismiss} />;
      })}
    </div>
  );
}
