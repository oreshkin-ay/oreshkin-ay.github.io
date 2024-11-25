import clsx from "clsx";

import { Logo as LogoIcon } from "../icons/logo";
import { Menu } from "../pages/landing/ui/Menu";
import "./Logo.css";

interface LogoPanelProps {
  isVisibleLogIn: boolean;
}

export const Logo = ({ isVisibleLogIn }: LogoPanelProps) => {
  return (
    <>
      <div
        className={clsx("logo-wrapper", {
          "move-left": !isVisibleLogIn,
        })}
      >
        <LogoIcon />
      </div>
      {!isVisibleLogIn && <Menu />}
    </>
  );
};
