import {
  useContext,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import TaskCard from "../components/TaskCard";

import CreateTaskModal from "../components/CreateTaskModal";

import {
  TaskContext,
} from "../context/TaskContext";

import {
  ThemeContext,
} from "../context/ThemeContext";

function MyTasks() {
  const { tasks } =
    useContext(TaskContext);

  const { theme } =
    useContext(ThemeContext);

  const [search,
    setSearch] =
    useState("");

  const filteredTasks =
    tasks.filter((task) =>
      task.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
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
        <Topbar
          search={search}
          setSearch={setSearch}
        />

        <div
          style={{
            padding: "30px",
          }}
        >
          <div
            style={{
              display: "flex",

              justifyContent:
                "space-between",

              alignItems:
                "center",
            }}
          >
            <h1>
              My Tasks 📋
            </h1>

            <CreateTaskModal />
          </div>

          <div
            style={{
              marginTop: "30px",
            }}
          >
            {filteredTasks
              .length === 0 ? (
              <p>
                No tasks found
              </p>
            ) : (
              filteredTasks.map(
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

export default MyTasks;