import { CreditCard } from "pages/profile/icons/CreditCard";
import { Lifebuoy } from "pages/profile/icons/Lifebuoy";
import { User } from "pages/profile/icons/User";

import "./ButtonList.css";

const ButtonList = () => {
  const menuItems = [
    { icon: <User />, label: "Профиль" },
    { icon: <CreditCard />, label: "Средства оплаты" },
    { icon: <CreditCard />, label: "Мои организации" },
    { icon: <Lifebuoy />, label: "Поддержка" },
  ];

  return (
    <div className="button-list">
      {menuItems.map((item, index) => (
        <button
          key={index}
          className={`button-item ${index === 0 ? "active" : ""}`}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonList;
