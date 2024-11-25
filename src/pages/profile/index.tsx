import { Link, Outlet } from "react-router-dom";

import "./Profile.css";
import Sidebar from "./ui/Sidebar";

const Profile = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Profile;
