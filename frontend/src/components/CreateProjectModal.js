import { useState } from "react";

function CreateProjectModal() {
  const [taskGroupName, setTaskGroupName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const createTaskGroupHandler = (e) => {
    e.preventDefault();

    alert("Task Group Created");

    console.log({
      taskGroupName,
      description,
    });

    setTaskGroupName("");

    setDescription("");
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "20px",
      }}
    >
      <h2>Create Task Group</h2>

      <form onSubmit={createTaskGroupHandler}>
        <input
          type="text"
          placeholder="Task Group Name"
          value={taskGroupName}
          onChange={(e) =>
            setTaskGroupName(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
          }}
        />

        <textarea
          placeholder="Task Group Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            height: "100px",
          }}
        ></textarea>

        <button
          type="submit"
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Create Task Group
        </button>
      </form>
    </div>
  );
}

export default CreateProjectModal;