import React from "react";

import "./UserProfileButton.css";

interface UserProfileButtonProps {
  initials: string;
  name: string;
  onClick?: () => void; // Optional click handler
}

export const UserProfileButton = ({
  initials,
  name,
  onClick,
}: UserProfileButtonProps) => {
  return (
    <button
      className="user-profile-button"
      onClick={onClick}
      aria-label="User Profile"
    >
      <div className="user-avatar">{initials}</div>
      <span className="user-name">{name}</span>
      <div className="dropdown-icon">▼</div>
    </button>
  );
};
