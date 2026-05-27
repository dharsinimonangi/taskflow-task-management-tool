import {
  useState,
  useContext,
} from "react";

import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import {
  ThemeContext,
} from "../context/ThemeContext";

function Settings() {
  const {
    theme,
    toggleTheme,
  } = useContext(ThemeContext);

  const user =
    JSON.parse(
      localStorage.getItem(
        "userInfo"
      )
    );

  const [notifications,
    setNotifications] =
    useState(true);

  const [profileName,
    setProfileName] =
    useState(
      user?.name || ""
    );

  return (
    <div
      style={{
        display: "flex",
        background:
          theme === "dark"
            ? "#0f172a"
            : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "250px",
          width: "100%",
          color:
            theme === "dark"
              ? "white"
              : "black",
        }}
      >
        <Topbar />

        <div style={{ padding: "30px" }}>
          <h1>Settings ⚙️</h1>

          <div
            style={{
              background:
                theme === "dark"
                  ? "#1e293b"
                  : "white",

              padding: "30px",

              borderRadius: "15px",

              marginTop: "20px",

              maxWidth: "500px",

              boxShadow:
                "0 4px 10px rgba(0,0,0,0.1)",
            }}
          >
            <h3>
              Profile Settings
            </h3>

            <input
              value={
                profileName
              }
              onChange={(e) =>
                setProfileName(
                  e.target.value
                )
              }
              style={{
                ...inputStyle,
                background:
                  theme === "dark"
                    ? "#334155"
                    : "white",

                color:
                  theme === "dark"
                    ? "white"
                    : "black",
              }}
            />

            <h3>
              Notification Settings
            </h3>

            <button
              onClick={() =>
                setNotifications(
                  !notifications
                )
              }
              style={{
                ...buttonStyle,

                background:
                  notifications
                    ? "#16a34a"
                    : "#ef4444",
              }}
            >
              {notifications
                ? "Notifications ON"
                : "Notifications OFF"}
            </button>

            <h3
              style={{
                marginTop:
                  "25px",
              }}
            >
              Theme Settings
            </h3>

            <select
              value={theme}
              onChange={(e) =>
                toggleTheme(
                  e.target.value
                )
              }
              style={{
                ...inputStyle,
                background:
                  theme === "dark"
                    ? "#334155"
                    : "white",

                color:
                  theme === "dark"
                    ? "white"
                    : "black",
              }}
            >
              <option value="light">
                Light
              </option>

              <option value="dark">
                Dark
              </option>
            </select>

            <p>
              Current Theme:
              {" "}
              {theme}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  marginBottom: "20px",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "12px 20px",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Settings;