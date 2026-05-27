import {
  useContext,
} from "react";

import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import TaskCard from "../components/TaskCard";

import {
  TaskContext,
} from "../context/TaskContext";

import {
  ThemeContext,
} from "../context/ThemeContext";

function Completed() {
  const { tasks } =
    useContext(TaskContext);

  const { theme } =
    useContext(ThemeContext);

  const completedTasks =
    tasks.filter(
      (task) =>
        task.status ===
        "Completed"
    );

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

        <div
          style={{
            padding: "30px",
          }}
        >
          <h1>
            Completed Tasks ✅
          </h1>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            {completedTasks
              .length === 0 ? (
              <p>
                No completed tasks
              </p>
            ) : (
              completedTasks.map(
                (task) => (
                  <TaskCard
                    key={
                      task._id
                    }
                    task={task}
                  />
                )
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completed;