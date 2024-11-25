import "./Profile.css";
import Finance from "./ui/Finance";
import Fleet from "./ui/Fleet";
import ProfileHeader from "./ui/ProfileHeader";
import Sidebar from "./ui/Sidebar";

const Profile = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <ProfileHeader />
        <div className="content-sections">
          <Fleet />
          <Finance />
        </div>
      </main>
    </div>
  );
};

export default Profile;
