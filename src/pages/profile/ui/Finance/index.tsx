import { RightArrow } from "pages/profile/icons/RightArrow";
import userCard from "pages/profile/images/Card.png";

const Finance = () => {
  return (
    <div className="profile-info-card-section">
      <h3 className="profile-info-card-title">
        Финансы <RightArrow />
      </h3>
      <div className="profile-info-card-content">
        <div className="profile-info-card-details">
          <div className="profile-info-card-description">
            Добавьте карту, чтобы не вводить данные при покупке
          </div>

          <button className="profile-info-card-btn">Добавить</button>
        </div>

        <div className="profile-info-card-wrapper-img">
          <img
            src={userCard}
            className="profile-info-card-img"
            alt="user-fleet"
          />
        </div>
      </div>
    </div>
  );
};

export default Finance;
