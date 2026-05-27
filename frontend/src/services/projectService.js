import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import BoardColumn from "../components/BoardColumn";

import TeamChat from "../components/TeamChat";

import FileUpload from "../components/FileUpload";

function ProjectBoard() {
  const todoTasks = [
    {
      title: "Design Homepage",
      description: "Create homepage UI",
      assignedTo: "Dharsini",
      deadline: "25 May",
      progress: 40,
    },
  ];

  const progressTasks = [
    {
      title: "API Integration",
      description: "Connect frontend with backend",
      assignedTo: "Team Member",
      deadline: "28 May",
      progress: 70,
    },
  ];

  const completedTasks = [
    {
      title: "Login System",
      description: "Authentication completed",
      assignedTo: "Developer",
      deadline: "20 May",
      progress: 100,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <div
        style={{
          flex: 1,
          backgroundColor: "#f1f5f9",
          minHeight: "100vh",
        }}
      >
        <Topbar />

        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            overflowX: "auto",
          }}
        >
          <BoardColumn title="To Do" tasks={todoTasks} />

          <BoardColumn
            title="In Progress"
            tasks={progressTasks}
          />

          <BoardColumn
            title="Completed"
            tasks={completedTasks}
          />
        </div>

        <div
          style={{
            padding: "20px",
          }}
        >
          <FileUpload />

          <TeamChat />
        </div>
      </div>
    </div>
  );
}

export default ProjectBoard;