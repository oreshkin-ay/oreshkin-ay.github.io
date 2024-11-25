import { Btn } from "icons/btn";
import { RightLine } from "right_line";

interface RightActionProps {
  direction: string;
  onSetDirection: (direction: string) => void;
  onSetHasAnimated: (val: boolean) => void;
}

export const RightAction = ({
  direction,
  onSetDirection,
  onSetHasAnimated,
}: RightActionProps) => {
  const handleClick = () => {
    onSetDirection("right");
    onSetHasAnimated(true);
  };

  const isVisible = direction === "center";

  return (
    <div className={`right-btn ${isVisible ? "visible" : "hidden"}`}>
      <div className="btn__text">
        ATOM HUB
        <button onClick={handleClick} className="btn-with-svg">
          <Btn />
        </button>
      </div>
      <RightLine />
    </div>
  );
};
