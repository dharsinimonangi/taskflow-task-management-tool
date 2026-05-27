import {
  useContext,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import BoardColumn from "../components/BoardColumn";

import CreateTaskModal from "../components/CreateTaskModal";

import {
  TaskContext,
} from "../context/TaskContext";

import {
  ThemeContext,
} from "../context/ThemeContext";

function ProjectBoard() {
  const [showModal, setShowModal] =
    useState(false);

  const { tasks } =
    useContext(TaskContext);

  const { theme } =
    useContext(ThemeContext);

  const todoTasks = tasks.filter(
    (task) => task.status === "Todo"
  );

  const progressTasks = tasks.filter(
    (task) =>
      task.status === "In Progress"
  );

  const completedTasks = tasks.filter(
    (task) =>
      task.status === "Completed"
  );

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div
        style={{
          marginLeft: "250px",
          flex: 1,
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
          <div
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              alignItems: "center",
            }}
          >
            <h1>My Tasks</h1>

            <button
              onClick={() =>
                setShowModal(true)
              }
              style={{
                padding: "12px 20px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              + Create Task
            </button>
          </div>

          {showModal && (
            <CreateTaskModal />
          )}

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <BoardColumn
              title="Todo"
              tasks={todoTasks}
            />

            <BoardColumn
              title="In Progress"
              tasks={progressTasks}
            />

            <BoardColumn
              title="Completed"
              tasks={completedTasks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectBoard;