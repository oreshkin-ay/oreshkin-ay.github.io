import { Close } from "../icons/close";
import right_panel from "../images/right_panel.png";

interface RightPanelProps {
  hasAnimated: boolean;
  direction: string;
  onSetDirection: (direction: string) => void;
}

export const RightPanel = ({
  hasAnimated,
  direction,
  onSetDirection,
}: RightPanelProps) => {
  if (!hasAnimated) {
    return null;
  }

  const isSlidingIn = direction === "right";

  const handleCloseClick = () => {
    onSetDirection("center");
  };

  return (
    <div
      className={`panel-right ${isSlidingIn ? "slide-in-left" : "slide-out-left"}`}
    >
      <img className="panel-right-img" src={right_panel} alt="right panel" />
      <button
        onClick={handleCloseClick}
        className="btn-with-svg btn-close btn-close-right-panel"
        aria-label="Close Right Panel"
      >
        <Close />
      </button>
    </div>
  );
};
