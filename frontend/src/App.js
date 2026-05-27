import {
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import MyTasks from "./pages/MyTasks";

import Completed from "./pages/Completed";

import Calendar from "./pages/Calendar";

import Settings from "./pages/Settings";

import ProjectBoard from "./pages/ProjectBoard";

import {
  ThemeProvider,
} from "./context/ThemeContext";

import {
  TaskProvider,
} from "./context/TaskContext";

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/register"
            element={
              <Register />
            }
          />

          <Route
            path="/dashboard"
            element={
              <Dashboard />
            }
          />

          <Route
            path="/mytasks"
            element={
              <MyTasks />
            }
          />

          <Route
            path="/completed"
            element={
              <Completed />
            }
          />

          <Route
            path="/calendar"
            element={
              <Calendar />
            }
          />

          <Route
            path="/settings"
            element={
              <Settings />
            }
          />

          <Route
            path="/board"
            element={
              <ProjectBoard />
            }
          />
        </Routes>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;