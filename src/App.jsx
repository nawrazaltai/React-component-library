import "./App.css";
import ButtonsPage from "./ButtonsPage";
import AlertsPage from "./AlertsPage";
import BadgesPage from "./BadgesPage";
import CardsPage from "./CardsPage";
import Home from "./Home";
import { Outlet, Route, Routes, Link, NavLink } from "react-router-dom";

function App() {
  const activeStyle = { textDecoration: "underline", color: "orange" };

  return (
    <>
      <nav className="flex w-screen h-32 border-b-4 items-center px-5 text-white justify-between border-white  bg-slate-900">
        <h1 className="text-xl">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to={"/"}
          >
            Home
          </NavLink>
        </h1>
        <ul className="flex gap-6 items-center ">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={"/buttonspage"}
            >
              Buttons
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={"/alertspage"}
            >
              Alerts
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={"/badgespage"}
            >
              Badges
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to={"/cardspage"}
            >
              Cards
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/buttonspage" element={<ButtonsPage />}></Route>
        <Route path="/alertspage" element={<AlertsPage />}></Route>
        <Route path="/badgespage" element={<BadgesPage />}></Route>
        <Route path="/cardspage" element={<CardsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
