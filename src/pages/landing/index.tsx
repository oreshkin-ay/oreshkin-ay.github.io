import { useState } from "react";

import clsx from "clsx";

import "./Landing.css";
import { Balls } from "./ui/Balls";
import { Entrance } from "./ui/Entrance";
import { LeftPanel } from "./ui/LeftPanel";
import { Logo } from "../../Logo";
import { RightPanel } from "./ui/RightPanel";
import { LeftAction } from "./ui/actions/Left";
import { RightAction } from "./ui/actions/Right";
import botton from "../../images/botton.png";

function Landing() {
  const [direction, setDirection] = useState("center");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVisibleLogIn, setIsVisibleLogIn] = useState(true);
  const [hasAnimatedLeft, setHasAnimatedLeft] = useState(false);
  const [hasAnimatedRight, setHasAnimatedRight] = useState(false);

  const isBackgroundMoving = direction !== "center";

  return (
    <div>
      <div
        className={clsx("background-container", {
          "move-background": isBackgroundMoving && direction === "left",
          "reset-background": isBackgroundMoving && direction !== "left",
        })}
      >
        <img
          className={clsx("background-image", {
            "move-right": direction === "left",
            "move-center": direction === "center",
            "move-left": direction === "right",
          })}
          src={botton}
          alt="background"
        />

        <Logo isVisibleLogIn={isVisibleLogIn} />

        <LeftAction
          direction={direction}
          onSetDirection={setDirection}
          onSetHasAnimated={setHasAnimatedLeft}
        />

        <LeftPanel
          hasAnimated={hasAnimatedLeft}
          direction={direction}
          onSetDirection={setDirection}
        />

        <Balls direction={direction} isVisibleLogIn={isVisibleLogIn} />

        <RightAction
          direction={direction}
          onSetHasAnimated={setHasAnimatedRight}
          onSetDirection={setDirection}
        />

        <RightPanel
          hasAnimated={hasAnimatedRight}
          direction={direction}
          onSetDirection={setDirection}
        />

        <Entrance
          isVisibleLogIn={isVisibleLogIn}
          isLoggedIn={isLoggedIn}
          onSetIsVisibleLogIn={setIsVisibleLogIn}
          onLogIn={setIsLoggedIn}
        />
      </div>
    </div>
  );
}

export default Landing;
