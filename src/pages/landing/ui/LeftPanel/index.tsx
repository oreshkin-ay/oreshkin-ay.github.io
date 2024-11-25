import { Close } from "icons/close";
import left_panel from "images/left_panel.png";

interface LeftPanelProps {
  hasAnimated: boolean;
  direction: string;
  onSetDirection: (direction: string) => void;
}

export const LeftPanel = ({
  hasAnimated,
  direction,
  onSetDirection,
}: LeftPanelProps) => {
  if (!hasAnimated) {
    return null;
  }

  const isSlidingIn = direction === "left";

  const handleCloseClick = () => {
    onSetDirection("center");
  };

  return (
    <div
      className={`panel-left ${isSlidingIn ? "slide-in-right" : "slide-out-right"}`}
    >
      <img className="panel-left-img" src={left_panel} alt="left panel" />
      <button
        onClick={handleCloseClick}
        className="btn-with-svg btn-close btn-close-left-panel"
        aria-label="Close Left Panel"
      >
        <Close />
      </button>
    </div>
  );
};
