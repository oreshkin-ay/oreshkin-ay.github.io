import { EditUser } from "pages/profile/icons/EditUser";
import { UserLogo } from "pages/profile/icons/UserLogo";

import Finance from "../Finance";
import Fleet from "../Fleet";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  return (
    <div className="profile-info-content">
      <div className="profile-header">
        <UserLogo />
        <div className="profile-info">
          <span className="name">Алексей Никитин</span>
          <span className="phone">+7 902 747 01 03</span>
          <button
            className="edit-info"
            // onClick={handleButtonClick}
          >
            <EditUser />
            Редактировать профиль
          </button>
        </div>
      </div>

      <div className="content-sections">
        <Fleet />
        <Finance />
      </div>
    </div>
  );
};

export default ProfileInfo;
