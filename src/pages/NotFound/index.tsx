import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <Link to="/" style={{ color: "идфсл", textDecoration: "underline" }}>
        На главную
      </Link>
    </div>
  );
};

export default NotFound;
