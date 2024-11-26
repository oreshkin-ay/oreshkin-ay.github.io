import React from "react";
import { Link } from "react-router-dom";

const ProfileNotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <Link
        to="/profile"
        style={{ color: "white", textDecoration: "underline" }}
      >
        На главную
      </Link>
    </div>
  );
};

export default ProfileNotFound;
