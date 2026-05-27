import {
  Link,
} from "react-router-dom";

import {
  useContext,
} from "react";

import {
  ThemeContext,
} from "../context/ThemeContext";

function Sidebar() {
  

  const { theme } =
    useContext(ThemeContext);

 const logoutHandler =
  () => {
    localStorage.removeItem(
      "userInfo"
    );

    window.location.href =
      "/";
  };

  return (
    <div
      style={{
        width: "250px",

        minHeight: "100vh",

        position: "fixed",

        left: 0,

        top: 0,

        background:
          theme === "dark"
            ? "#020617"
            : "#0f172a",

        color: "white",

        padding: "25px 15px",

        display: "flex",

        flexDirection:
          "column",

        justifyContent:
          "space-between",
      }}
    >
      <div>
        <h1
          style={{
            color: "#60a5fa",

            marginBottom:
              "40px",
          }}
        >
          TaskFlow
        </h1>

        <SidebarLink
          to="/dashboard"
          text="🏠 Dashboard"
        />

        <SidebarLink
          to="/mytasks"
          text="📋 My Tasks"
        />

        <SidebarLink
          to="/completed"
          text="✅ Completed"
        />

        <SidebarLink
          to="/calendar"
          text="📅 Calendar"
        />

        <SidebarLink
          to="/board"
          text="🗂 Board"
        />

        <SidebarLink
          to="/settings"
          text="⚙️ Settings"
        />
      </div>

      <button
        onClick={
          logoutHandler
        }
        style={{
          width: "100%",

          padding: "14px",

          border: "none",

          borderRadius:
            "12px",

          background:
            "#ef4444",

          color: "white",

          fontSize: "16px",

          fontWeight:
            "bold",

          cursor: "pointer",

          marginTop: "20px",
        }}
      >
        Logout
      </button>
    </div>
  );
}

function SidebarLink({
  to,
  text,
}) {
  return (
    <Link
      to={to}
      style={{
        display: "block",

        padding: "14px",

        marginBottom:
          "10px",

        borderRadius:
          "10px",

        textDecoration:
          "none",

        color: "white",

        background:
          "rgba(255,255,255,0.05)",
      }}
    >
      {text}
    </Link>
  );
}

export default Sidebar;