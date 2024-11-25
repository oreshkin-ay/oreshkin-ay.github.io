import React from "react";

import { Logout } from "pages/profile/icons/Logout";

import "./LogoutButton.css";

const LogoutButton = () => {
  return (
    <button
      className="logout-button"
      // onClick={handleButtonClick}
    >
      <Logout />
      Выход
    </button>
  );
};

export default LogoutButton;
