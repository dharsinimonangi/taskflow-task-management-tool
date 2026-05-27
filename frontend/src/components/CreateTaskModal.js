import {
  useState,
  useContext,
} from "react";

import {
  TaskContext,
} from "../context/TaskContext";

function CreateTaskModal() {
  const { addTask } =
    useContext(TaskContext);

  const [title, setTitle] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [priority,
    setPriority] =
    useState("Medium");

  const [status,
    setStatus] =
    useState("Todo");

  const [dueDate,
    setDueDate] =
    useState("");

  const [assignedUser,
    setAssignedUser] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTask({
      title,
      description,
      priority,
      status,
      dueDate,
      assignedUser,
    });

    setTitle("");
    setDescription("");
    setPriority("Medium");
    setStatus("Todo");
    setDueDate("");
    setAssignedUser("");

    alert("Task Created");
  };

  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "15px",
        marginBottom: "30px",
      }}
    >
      <h2>Create Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          style={inputStyle}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          style={inputStyle}
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
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
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
          <option>Todo</option>
          <option>In Progress</option>
          <option>Completed</option>
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

        <input
          type="text"
          placeholder="Assign User"
          value={assignedUser}
          onChange={(e) =>
            setAssignedUser(
              e.target.value
            )
          }
          style={inputStyle}
        />

        <button
          type="submit"
          style={buttonStyle}
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "1px solid #ccc",
};

const buttonStyle = {
  padding: "12px 20px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default CreateTaskModal;