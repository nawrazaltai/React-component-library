import "./App.css";
import ButtonsPage from "./ButtonsPage";
import AlertsPage from "./AlertsPage";
import BadgesPage from "./BadgesPage";
import CardsPage from "./CardsPage";
import AccordionPage from "./AccordionPage";
import Home from "./Home";
import { Outlet, Route, Routes, NavLink } from "react-router-dom";
import ModalPage from "./ModalPage";
import { MdLocalLibrary } from "react-icons/md";
import { AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";

function App() {
  const activeStyle = { color: "orange" };

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="bg-slate-400">
      <nav className="flex w-full h-28 border-b-4 items-center px-5 text-white justify-between border-white  bg-slate-900">
        <h1 className="text-xl">
          <NavLink
            className={"flex items-center gap-1 hover:text-orange-300"}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={"/"}
          >
            <MdLocalLibrary className="text-4xl" />
            Component Library
          </NavLink>
        </h1>

        <div
          className="flex flex-col items-center mr-5 hover:cursor-pointer hover:text-orange-300"
          onClick={toggleMenu}
        >
          <AiOutlineMenuFold className={`text-4xl `} />
          <span className="text-sm tracking-widest">Menu</span>
        </div>
        <div
          className={
            openMenu
              ? `flex flex-col flex-grow h-screen absolute inset-y-28 right-0 bottom-0 px-14 border-l-4 border-l-white justify-start pt-8 items-center bg-slate-900`
              : "hidden"
          }
        >
          <ul className="flex text-lg w-full flex-col items-center justify-start h-full gap-8">
            <li className="">
              <NavLink
                className={`hover:text-orange-300`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"/buttonspage"}
              >
                Buttons
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"hover:text-orange-300"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"/alertspage"}
              >
                Alerts
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"hover:text-orange-300"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"/badgespage"}
              >
                Badges
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"hover:text-orange-300"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"/cardspage"}
              >
                Cards
              </NavLink>
            </li>

            <li>
              <NavLink
                className={"hover:text-orange-300"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"/accordionpage"}
              >
                Accordion
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"hover:text-orange-300"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to={"/modalpage"}
              >
                Modal
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/buttonspage" element={<ButtonsPage />}></Route>
        <Route path="/alertspage" element={<AlertsPage />}></Route>
        <Route path="/badgespage" element={<BadgesPage />}></Route>
        <Route path="/cardspage" element={<CardsPage />}></Route>
        <Route path="/modalpage" element={<ModalPage />}></Route>
        <Route path="/accordionpage" element={<AccordionPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
