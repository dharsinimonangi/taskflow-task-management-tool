import {
  createContext,
  useEffect,
  useState,
} from "react";

export const TaskContext =
  createContext();

export const TaskProvider = ({
  children,
}) => {
  const [tasks, setTasks] =
    useState([]);

  const getCurrentUser =
    () => {
      return JSON.parse(
        localStorage.getItem(
          "userInfo"
        )
      );
    };

  const loadTasks = () => {
    const user =
      getCurrentUser();

    if (!user?.email) {
      setTasks([]);
      return;
    }

    const storedTasks =
      JSON.parse(
        localStorage.getItem(
          `tasks_${user.email}`
        )
      ) || [];

    setTasks(storedTasks);
  };

useEffect(() => {
  loadTasks();

// eslint-disable-next-line
}, []);
  const saveTasks = (
    updatedTasks
  ) => {
    const user =
      getCurrentUser();

    if (!user?.email)
      return;

    localStorage.setItem(
      `tasks_${user.email}`,
      JSON.stringify(
        updatedTasks
      )
    );

    setTasks(updatedTasks);
  };

  const addTask = (
    task
  ) => {
    const newTask = {
      ...task,

      _id: Date.now(),
    };

    const updatedTasks = [
      ...tasks,
      newTask,
    ];

    saveTasks(
      updatedTasks
    );
  };

  const deleteTask = (
    id
  ) => {
    const updatedTasks =
      tasks.filter(
        (task) =>
          task._id !== id
      );

    saveTasks(
      updatedTasks
    );
  };

  const editTask = (
    id,
    updatedTask
  ) => {
    const updatedTasks =
      tasks.map((task) =>
        task._id === id
          ? {
              ...task,
              ...updatedTask,
            }
          : task
      );

    saveTasks(
      updatedTasks
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        editTask,
        loadTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};