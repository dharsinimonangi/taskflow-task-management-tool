import {
  useContext,
} from "react";

import {
  ThemeContext,
} from "../context/ThemeContext";

function Topbar({
  search = "",
  setSearch = () => {},
}) {
  const { theme } =
    useContext(ThemeContext);

  const user =
    JSON.parse(
      localStorage.getItem(
        "userInfo"
      )
    );

  return (
    <div
      style={{
        display: "flex",

        justifyContent:
          "space-between",

        alignItems:
          "center",

        padding: "20px 30px",

        background:
          theme === "dark"
            ? "#1e293b"
            : "white",

        borderBottom:
          "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        style={{
          width: "320px",

          padding: "12px 15px",

          borderRadius:
            "12px",

          border:
            "1px solid #ccc",

          outline: "none",

          fontSize: "15px",

          background:
            theme === "dark"
              ? "#334155"
              : "#f8fafc",

          color:
            theme === "dark"
              ? "white"
              : "black",
        }}
      />

      <div
        style={{
          display: "flex",

          alignItems:
            "center",

          gap: "20px",
        }}
      >
        <div
          style={{
            fontSize: "22px",
          }}
        >
          🔔
        </div>

        <div
          style={{
            background:
              theme === "dark"
                ? "#334155"
                : "#e2e8f0",

            padding:
              "10px 14px",

            borderRadius:
              "12px",

            fontWeight:
              "bold",
          }}
        >
          👤{" "}
          {user?.name ||
            "User"}
        </div>
      </div>
    </div>
  );
}

export default Topbar;