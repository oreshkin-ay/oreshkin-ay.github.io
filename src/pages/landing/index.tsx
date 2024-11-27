import { useState } from "react";

import clsx from "clsx";

import { Logo } from "../../Logo";
import botton from "../../images/botton.png";
import "./Landing.css";
import { useUserProfileQuery } from "./queries/userProfile";
import { Balls } from "./ui/Balls";
import { Entrance } from "./ui/Entrance";
import { LeftPanel } from "./ui/LeftPanel";
import { RightPanel } from "./ui/RightPanel";
import { LeftAction } from "./ui/actions/Left";
import { RightAction } from "./ui/actions/Right";

const USER_TOKEN =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyMDQ3N2EwYy0yOGRlLTQ2NjgtODM3Yi1jZjgyZTJkMzRiNzgiLCJleHAiOjE3NjM3MTM3MTgsImlhdCI6MTczMjYwOTcxOCwicGhvbmVfbnVtYmVyIjoiNzk4ODg4ODg4ODgifQ.CqJitPp13fNL4s3VcugR9uqns4eQlaTUckg_TbY4lLnXnLhDbbY-AvYDUVLM9BPZkrHrrRCkS2kNodCmN7cE-R8yvgS1CeLUXbf-x2TwH9VIYqBHiAeME4A1P5kOmASWcJMGBsw5PIfMnF_cBaAIMbrE2vvdVpc4dgi9FBDqJF8JPoh_qHK0YvlO4VSN5VqYXRk3zyVeDOw6iyt0XMGSrwn5F3H3sKO27M6be1bYVvNqwO-H3taeVDXT17D6TvVGFu8ElYoyogpKlSH77YTVfWCm9bA7JlSdl97RV4-0s-R2zWtY0lsNWPalgWFfbLmd9Qx2z-KnTBGyDHx1PuODxmiuTEmkt87G7DAUC50MEpE5jwPBJ_zs1FiwAnbNg_EyEdG7OZyIa8vANW_ZjBTx6mdi56_QXJ727vvbWLalu4OsqQd3xoxQmgAc5unHKWNIswpajKsT0O-20pvq3perrPDTWLr4aQSQGGgmQSDZYdoTKXO0A2EuiM7vx4V94Fa7Sp7dFDNGzjFn5P23hNh5V36EqnqWSFY9bg7zwzTOhV5vKOghs2LuDeUbUst94zQmoAbw4tVsAi0qpEri9PuSG5EvTfffMnn5ZUCrFrzmG0akdeash15LgoOT_5s60fs2bBBdRCFJq-DHpSZ4_h68gmMPxiQ-cjAQAy2vXJ-zd8s";

function Landing() {
  const [direction, setDirection] = useState("center");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isVisibleLogIn, setIsVisibleLogIn] = useState(true);
  const [hasAnimatedLeft, setHasAnimatedLeft] = useState(false);
  const [hasAnimatedRight, setHasAnimatedRight] = useState(false);

  const { data, isLoading, error } = useUserProfileQuery(USER_TOKEN);

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
