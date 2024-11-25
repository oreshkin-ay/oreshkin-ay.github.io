import { Logo } from "pages/profile/icons/Logo";

import ozon from "../../images/Ozon.png";
import LogoutButton from "./LogoutButton";
import MenuList from "./MenuList";
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
          <MenuList />
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
