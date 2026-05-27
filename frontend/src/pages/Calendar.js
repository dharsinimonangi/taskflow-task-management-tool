import {
  useContext,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";

import Topbar from "../components/Topbar";

import {
  TaskContext,
} from "../context/TaskContext";

import {
  ThemeContext,
} from "../context/ThemeContext";

function Calendar() {
  const { tasks } =
    useContext(TaskContext);

  const { theme } =
    useContext(ThemeContext);

  const [currentDate,
    setCurrentDate] =
    useState(new Date());

  const currentMonth =
    currentDate.toLocaleString(
      "default",
      {
        month: "long",
      }
    );

  const currentYear =
    currentDate.getFullYear();

  const daysInMonth =
    new Date(
      currentYear,
      currentDate.getMonth() + 1,
      0
    ).getDate();

  const firstDay =
    new Date(
      currentYear,
      currentDate.getMonth(),
      1
    ).getDay();

  const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];

  const goToPreviousMonth =
    () => {
      setCurrentDate(
        new Date(
          currentYear,
          currentDate.getMonth() - 1,
          1
        )
      );
    };

  const goToNextMonth =
    () => {
      setCurrentDate(
        new Date(
          currentYear,
          currentDate.getMonth() + 1,
          1
        )
      );
    };

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
              Calendar 📅
            </h1>

            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <button
                onClick={
                  goToPreviousMonth
                }
                style={
                  buttonStyle
                }
              >
                ← Prev
              </button>

              <button
                onClick={
                  goToNextMonth
                }
                style={
                  buttonStyle
                }
              >
                Next →
              </button>
            </div>
          </div>

          <h2
            style={{
              marginTop: "15px",
            }}
          >
            {currentMonth}
            {" "}
            {currentYear}
          </h2>

          <div
            style={{
              display: "grid",

              gridTemplateColumns:
                "repeat(7,1fr)",

              gap: "15px",

              marginTop: "30px",
            }}
          >
            {weekDays.map(
              (day) => (
                <div
                  key={day}
                  style={{
                    textAlign:
                      "center",

                    fontWeight:
                      "bold",

                    padding:
                      "10px",
                  }}
                >
                  {day}
                </div>
              )
            )}

            {[...Array(firstDay)].map(
              (_, index) => (
                <div
                  key={index}
                ></div>
              )
            )}

            {[...Array(daysInMonth)].map(
              (_, index) => {
                const day =
                  index + 1;

                const dayTasks =
                  tasks.filter(
                    (task) => {
                      if (
                        !task.dueDate
                      )
                        return false;

                      const taskDate =
                        new Date(
                          task.dueDate
                        );

                      return (
                        taskDate.getDate() ===
                          day &&
                        taskDate.getMonth() ===
                          currentDate.getMonth() &&
                        taskDate.getFullYear() ===
                          currentYear
                      );
                    }
                  );

                return (
                  <div
                    key={day}
                    style={{
                      background:
                        theme ===
                        "dark"
                          ? "#1e293b"
                          : "white",

                      minHeight:
                        "140px",

                      borderRadius:
                        "15px",

                      padding:
                        "10px",

                      boxShadow:
                        "0 4px 10px rgba(0,0,0,0.1)",

                      overflow:
                        "hidden",
                    }}
                  >
                    <div
                      style={{
                        fontWeight:
                          "bold",

                        marginBottom:
                          "10px",
                      }}
                    >
                      {day}
                    </div>

                    {dayTasks.map(
                      (task) => (
                        <div
                          key={
                            task._id
                          }
                          style={{
                            background:
                              task.priority ===
                              "High"
                                ? "#ef4444"
                                : task.priority ===
                                  "Medium"
                                ? "#f59e0b"
                                : "#22c55e",

                            color:
                              "white",

                            padding:
                              "6px",

                            borderRadius:
                              "8px",

                            fontSize:
                              "12px",

                            marginBottom:
                              "6px",
                          }}
                        >
                          {
                            task.title
                          }
                        </div>
                      )
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "10px 16px",
  background: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
};

export default Calendar;