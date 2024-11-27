import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerEffect = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "#121212", padding: "20px" }}>
      <div style={{ marginBottom: "15px" }}>
        <Skeleton
          height={60}
          borderRadius={10}
          baseColor="#1a1a1a"
          highlightColor="#2a2a2a"
        />
      </div>
      <div style={{ marginBottom: "15px" }}>
        <Skeleton
          height={60}
          borderRadius={10}
          baseColor="#1a1a1a"
          highlightColor="#2a2a2a"
        />
      </div>
      <div>
        <Skeleton
          height={60}
          borderRadius={10}
          baseColor="#1a1a1a"
          highlightColor="#2a2a2a"
        />
      </div>
    </div>
  );
};

export default ShimmerEffect;
