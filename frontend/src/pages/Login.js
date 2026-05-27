import "../styles/auth.css";

import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";

function Login() {
  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const loginHandler =
    async (e) => {
      e.preventDefault();

      try {
        const res =
          await API.post(
            "/auth/login",
            {
              email,
              password,
            }
          );

        localStorage.setItem(
          "userInfo",
          JSON.stringify(
            res.data
          )
        );

        alert(
          "Login Successful"
        );

        navigate(
          "/dashboard"
        );
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Login Failed"
        );
      }
    };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>TaskFlow</h1>

        <p>
          Organize tasks,
          manage projects,
          and boost team
          productivity.
        </p>
      </div>

      <div className="auth-right">
        <form
          className="auth-form"
          onSubmit={
            loginHandler
          }
        >
          <h2>
            Welcome Back 👋
          </h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />

          <button type="submit">
            Login
          </button>

          <p>
            Don't have an
            account?
            {" "}
            <Link to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;