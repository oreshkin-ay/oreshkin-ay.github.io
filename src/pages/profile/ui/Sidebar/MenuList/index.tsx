import { NavLink } from "react-router-dom";

import { CreditCard } from "pages/profile/icons/CreditCard";
import { Lifebuoy } from "pages/profile/icons/Lifebuoy";
import { User } from "pages/profile/icons/User";

import "./MenuList.css";

const MenuList = () => {
  const menuItems = [
    { icon: <User />, label: "Профиль", to: "user" },
    {
      icon: <CreditCard />,
      label: "Средства оплаты",
      to: "payment-methods",
    },
    { icon: <CreditCard />, label: "Мои организации", to: "" },
    { icon: <Lifebuoy />, label: "Поддержка", to: "" },
  ];

  return (
    <div className="button-list">
      {menuItems.map((item, index) => {
        return (
          <NavLink
            to={item.to}
            key={index}
            className={({ isActive }) =>
              `button-item ${isActive && item.to ? "active" : ""}`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default MenuList;
