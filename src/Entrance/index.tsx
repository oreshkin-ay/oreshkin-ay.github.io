import { LogIn } from "../icons/logIn";
import "./Entrance.css";

interface EntranceProps {
  isLoggedIn: boolean;
  isVisibleLogIn: boolean;
  onLogIn: (isLoggedIn: boolean) => void;
  onSetIsVisibleLogIn: (isVisibleLogIn: boolean) => void;
}

export const Entrance = ({
  isLoggedIn,
  isVisibleLogIn,
  onLogIn,
  onSetIsVisibleLogIn,
}: EntranceProps) => {
  if (isLoggedIn) {
    return null;
  }

  const handleTransitionEnd = () => {
    onLogIn(true);
  };

  const handleButtonClick = () => {
    onSetIsVisibleLogIn(false);
  };

  return (
    <div className="entrance-wrapper">
      <div
        className={`entrance-container ${!isVisibleLogIn ? "hide-animation" : ""}`}
        onTransitionEnd={handleTransitionEnd}
      >
        <span className="entrance-title">ATOM ID</span>
        <span className="entrance-description">
          Универсальная платформа, объединяющая сервисы компании Atom в единую
          экосистему
        </span>
        <button className="entrance-button" onClick={handleButtonClick}>
          <LogIn /> Авторизация в Atom ID
        </button>
      </div>
    </div>
  );
};
