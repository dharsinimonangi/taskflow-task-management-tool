import {
  useState,
  useContext,
} from "react";

import {
  TaskContext,
} from "../context/TaskContext";

import {
  ThemeContext,
} from "../context/ThemeContext";

function TaskCard({ task }) {
  const {
    deleteTask,
    editTask,
  } = useContext(TaskContext);

  const { theme } =
    useContext(ThemeContext);

  const [editing,
    setEditing] =
    useState(false);

  const [title,
    setTitle] =
    useState(task.title);

  const [description,
    setDescription] =
    useState(
      task.description
    );

  const [priority,
    setPriority] =
    useState(task.priority);

  const [status,
    setStatus] =
    useState(task.status);

  const [dueDate,
    setDueDate] =
    useState(
      task.dueDate
        ? task.dueDate.substring(
            0,
            10
          )
        : ""
    );

  const saveEdit =
    async () => {
      const updatedTask = {
        title,
        description,
        priority,
        status,
        dueDate,
      };

      await editTask(
        task._id,
        updatedTask
      );

      setEditing(false);
    };

  return (
    <div
      style={{
        background:
          theme === "dark"
            ? "#1e293b"
            : "white",

        padding: "15px",

        borderRadius: "15px",

        marginBottom: "15px",

        boxShadow:
          "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      {editing ? (
        <>
          <input
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <textarea
            value={
              description
            }
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            style={
              textareaStyle
            }
          />

          <select
            value={priority}
            onChange={(e) =>
              setPriority(
                e.target.value
              )
            }
            style={inputStyle}
          >
            <option>
              Low
            </option>

            <option>
              Medium
            </option>

            <option>
              High
            </option>
          </select>

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
            style={inputStyle}
          >
            <option>
              Todo
            </option>

            <option>
              In Progress
            </option>

            <option>
              Completed
            </option>
          </select>

          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(
                e.target.value
              )
            }
            style={inputStyle}
          />

          <button
            onClick={saveEdit}
            style={
              saveButtonStyle
            }
          >
            Save
          </button>
        </>
      ) : (
        <>
          <h3>
            {task.title}
          </h3>

          <p>
            {
              task.description
            }
          </p>

          <p>
            Priority:
            {" "}
            {task.priority}
          </p>

          <p>
            Status:
            {" "}
            {task.status}
          </p>

          <p>
            Due:
            {" "}
            {task.dueDate
              ? new Date(
                  task.dueDate
                ).toLocaleDateString()
              : "No Date"}
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop:
                "10px",
            }}
          >
            <button
              onClick={() =>
                setEditing(
                  true
                )
              }
              style={
                editButtonStyle
              }
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteTask(
                  task._id
                )
              }
              style={
                deleteButtonStyle
              }
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "10px",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  minHeight: "80px",
  marginBottom: "10px",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const editButtonStyle = {
  padding: "10px 15px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const deleteButtonStyle = {
  padding: "10px 15px",
  background: "#ef4444",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

const saveButtonStyle = {
  padding: "10px 15px",
  background: "#16a34a",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default TaskCard;