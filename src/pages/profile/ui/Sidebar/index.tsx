import { Logo } from "pages/profile/icons/Logo";

import ozon from "../../images/Ozon.png";
import ButtonList from "./ButtonList";
import LogoutButton from "./LogoutButton";
import "./Sidebar.css";
import SuperAppCard from "./SuperAppCard";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <div className="logo">
          <Logo />
        </div>
        <nav className="nav">
          <ButtonList />
        </nav>
      </div>

      <div className="actions">
        <SuperAppCard />

        <img className="ozon" src={ozon} alt="ozon" />

        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;
