import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#1e293b",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h2 style={{ color: "white" }}>TaskFlow</h2>

      <div>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navbar;