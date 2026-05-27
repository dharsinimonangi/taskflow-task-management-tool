import "../styles/auth.css";

import {
  useState,
} from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import API from "../services/api";

function Register() {
  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email,
    setEmail] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const registerHandler =
    async (e) => {
      e.preventDefault();

      try {
        await API.post(
          "/auth/register",
          {
            name,
            email,
            password,
          }
        );

        alert(
          "Registration Successful"
        );

        navigate("/");
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Register Failed"
        );
      }
    };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>TaskFlow</h1>

        <p>
          Manage tasks,
          track progress,
          and collaborate
          efficiently.
        </p>
      </div>

      <div className="auth-right">
        <form
          className="auth-form"
          onSubmit={
            registerHandler
          }
        >
          <h2>
            Create Account 🚀
          </h2>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            required
          />

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
            Register
          </button>

          <p>
            Already have an
            account?{" "}
            <Link to="/">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;