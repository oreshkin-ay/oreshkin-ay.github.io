import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardSkeleton = () => {
  return (
    <div style={{  
      padding: "20px", backgroundColor: 'transparent' }}>
      <div style={{ height: "70%", display: "flex",  gap: "20px", marginBottom: "20px" }}>
        <Skeleton
          height= "100%"
          width={100}
          borderRadius={10}
          baseColor="#1a1a1a"
          highlightColor="#2a2a2a"
        />
        <Skeleton
          height= "100%"
          width={300}
          borderRadius={10}
          baseColor="#1a1a1a"
          highlightColor="#2a2a2a"
        />
      </div>
      <div style={{ display: "flex", justifyContent:'center', gap: "15px" }}>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Skeleton
              key={index}
              height={60}
              width={80}
              borderRadius={10}
              baseColor="#1a1a1a"
              highlightColor="#2a2a2a"
            />
          ))}
      </div>
    </div>
  );
};

export default DashboardSkeleton;
