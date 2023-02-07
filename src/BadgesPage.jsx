import Badges from "./Badges";
import { BsCheckCircle, BsInfoCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

export default function BadgesPage() {
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
  return (
    <div className="flex items-start justify-center border-b-2 border-white h-screen w-screen bg-slate-500">
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
  );
}
