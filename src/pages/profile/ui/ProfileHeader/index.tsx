import React from "react";

import "./ProfileHeader.css";

const ProfileHeader = () => {
  return (
    <div className="profile-header">
      <div className="avatar"></div>
      <div>
        <h2>Алексей Никитин</h2>
        <p>+7 902 747 01 03</p>
        <button>Редактировать профиль</button>
      </div>
    </div>
  );
};

export default ProfileHeader;
