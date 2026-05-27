import {
  useContext,
} from "react";

import TaskCard from "./TaskCard";

import {
  ThemeContext,
} from "../context/ThemeContext";

function BoardColumn({
  title,
  tasks,
}) {
  const { theme } =
    useContext(ThemeContext);

  return (
    <div
      style={{
        flex: 1,

        background:
          theme === "dark"
            ? "#1e293b"
            : "#e2e8f0",

        padding: "15px",

        borderRadius: "15px",

        minHeight: "500px",
      }}
    >
      <h2
        style={{
          color:
            theme === "dark"
              ? "white"
              : "#0f172a",
        }}
      >
        {title}
      </h2>

      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
}

export default BoardColumn;