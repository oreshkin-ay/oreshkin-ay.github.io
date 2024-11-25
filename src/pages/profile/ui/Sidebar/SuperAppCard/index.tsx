import { CloseCard } from "pages/profile/icons/CloseCard";

import "./SuperAppCard.css";

const SuperAppCard = () => {
  return (
    <div className="super-app-card">
      <div className="super-app-header">
        <span className="super-app-title">Super APP</span>
        <button className="close-button" aria-label="Close">
          <CloseCard />
        </button>
      </div>
      <span className="super-app-description">
        Полный контроль над вашим автомобилем
      </span>

      <button className="details-button">Подробнее</button>
    </div>
  );
};

export default SuperAppCard;
