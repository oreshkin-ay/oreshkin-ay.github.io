import { Btn } from "icons/btn";
import { LeftLine } from "left_line";

interface LeftActionProps {
  direction: string;
  onSetDirection: (direction: string) => void;
  onSetHasAnimated: (val: boolean) => void;
}

export const LeftAction = ({
  direction,
  onSetDirection,
  onSetHasAnimated,
}: LeftActionProps) => {
  const handleClick = () => {
    onSetDirection("left");
    onSetHasAnimated(true);
  };

  const isVisible = direction === "center";

  return (
    <div className={`left-btn ${isVisible ? "visible" : "hidden"}`}>
      <div className="btn__text">
        SUPER APP
        <button onClick={handleClick} className="btn-with-svg">
          <Btn />
        </button>
      </div>
      <LeftLine />
    </div>
  );
};
