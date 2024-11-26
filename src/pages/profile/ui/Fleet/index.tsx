import { RightArrow } from "pages/profile/icons/RightArrow";
import userFleet from "pages/profile/images/UserFleet.png";

const Fleet = () => {
  return (
    <div className="profile-info-card-section">
      <h3 className="profile-info-card-title">
        Ваш флот <RightArrow />
      </h3>
      <div className="profile-info-card-content">
        <div className="profile-info-card-details">
          <div className="profile-info-card-description">
            В вашем гараже пока нет автомобилей, посмотрите на нашу новую модель
          </div>

          <button className="profile-info-card-btn">Подробнее</button>
        </div>

        <div className="profile-info-card-wrapper-img">
          <img
            src={userFleet}
            className="profile-info-card-img"
            alt="user-fleet"
          />
        </div>
      </div>
    </div>
  );
};

export default Fleet;
