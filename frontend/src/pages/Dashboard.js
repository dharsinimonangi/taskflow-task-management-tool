import {
  useContext,
} from "react";

import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import {
  ThemeContext,
} from "../context/ThemeContext";

import {
  TaskContext,
} from "../context/TaskContext";

function Dashboard() {
  const { theme } =
    useContext(ThemeContext);

  const { tasks } =
    useContext(TaskContext);

  const user =
    JSON.parse(
      localStorage.getItem(
        "userInfo"
      )
    );

  const totalTasks =
    tasks.length;

  const pendingTasks =
    tasks.filter(
      (task) =>
        task.status ===
        "Todo"
    ).length;

  const completedTasks =
    tasks.filter(
      (task) =>
        task.status ===
        "Completed"
    ).length;

  const overdueTasks =
    tasks.filter(
      (task) => {
        if (!task.dueDate)
          return false;

        return (
          new Date(
            task.dueDate
          ) < new Date()
        );
      }
    ).length;

  const cardStyle = {
    background:
      theme === "dark"
        ? "#1e293b"
        : "white",

    padding: "20px",

    borderRadius: "15px",

    flex: 1,

    boxShadow:
      "0 4px 10px rgba(0,0,0,0.1)",
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          marginLeft: "250px",

          width: "100%",

          minHeight: "100vh",

          background:
            theme === "dark"
              ? "#0f172a"
              : "#f8fafc",

          color:
            theme === "dark"
              ? "white"
              : "black",
        }}
      >
        <Topbar />

        <div style={{ padding: "30px" }}>
          <h1>
            Good Evening,
            {" "}
            {user?.name} 👋
          </h1>

          <p>
            Welcome to
            TaskFlow
          </p>

          <div
            style={{
              display: "flex",

              gap: "20px",

              marginTop: "30px",

              flexWrap: "wrap",
            }}
          >
            <div style={cardStyle}>
              <h2>
                {totalTasks}
              </h2>

              <p>
                Total Tasks
              </p>
            </div>

            <div style={cardStyle}>
              <h2>
                {pendingTasks}
              </h2>

              <p>
                Pending Tasks
              </p>
            </div>

            <div style={cardStyle}>
              <h2>
                {completedTasks}
              </h2>

              <p>
                Completed Tasks
              </p>
            </div>

            <div style={cardStyle}>
              <h2>
                {overdueTasks}
              </h2>

              <p>
                Overdue Tasks
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "40px",
            }}
          >
            <h2>
              Productivity Overview
            </h2>

            <div
              style={{
                background:
                  theme === "dark"
                    ? "#1e293b"
                    : "white",

                padding: "25px",

                borderRadius:
                  "15px",

                marginTop: "20px",

                boxShadow:
                  "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <p>
                ✔ Team tasks are
                progressing well.
              </p>

              <p>
                ✔ Upcoming
                deadlines are on
                track.
              </p>

              <p>
                ✔ Project workflow
                is active.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;