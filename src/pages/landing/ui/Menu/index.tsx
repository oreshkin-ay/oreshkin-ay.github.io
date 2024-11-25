import { UserProfileButton } from "../UserProfileButton";
import "./Menu.css";

interface MenuItem {
  label: string;
  link?: string;
}

interface UserProfile {
  initials: string;
  name: string;
}

const menuItems: MenuItem[] = [
  { label: "Профиль" },
  { label: "Мои организации" },
  { label: "Поддержка" },
  { label: "Настройки" },
];

const userProfile: UserProfile = {
  initials: "SN",
  name: "Михаил Алексеев",
};

export const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <a href={item.link || "#"} key={index} className="menu-item">
            {item.label}
          </a>
        ))}
      </div>

      <UserProfileButton
        initials={userProfile.initials}
        name={userProfile.name}
        // onClick={handleProfileClick}
      />
    </div>
  );
};
