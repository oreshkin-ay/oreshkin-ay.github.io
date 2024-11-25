import clsx from "clsx";

import center from "images/center.png";
import left from "left.png";
import right from "right.png";

interface BallsProps {
  direction: string;
  isVisibleLogIn: boolean;
}

interface BallConfig {
  key: string;
  src: string;
  alt: string;
  className: string;
}

export const Balls = ({ direction, isVisibleLogIn }: BallsProps) => {
  const ballConfigs: BallConfig[] = [
    { key: "first-ball", src: left, alt: "ball 1", className: "left" },
    { key: "static-ball", src: center, alt: "ball 2", className: "center" },
    { key: "third-ball", src: right, alt: "ball 3", className: "right" },
  ];

  const getDirectionClass = (dir: string) =>
    dir === "left" ? "move-right" : dir === "right" ? "move-left" : "";

  return (
    <>
      {ballConfigs.map(({ key, src, alt, className }) => (
        <div
          key={key}
          className={clsx("ball", key, getDirectionClass(direction), {
            blur: isVisibleLogIn,
          })}
        >
          <img
            className={clsx(className, getDirectionClass(direction))}
            src={src}
            alt={alt}
          />
        </div>
      ))}
    </>
  );
};
