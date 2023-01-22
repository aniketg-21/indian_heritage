import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import histContext from "../context/histContext";

const Login = () => {
  const context = useContext(histContext);
  const { showAlert } = context;
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({
    user_email: "",
    user_pass: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.user_email,
        password: credentials.user_pass,
      }),
    });

    const json = await response.json();
    setCredentials({ user_email: "", user_pass: "" });

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("eID", json.eID);
      navigate("/");
      showAlert(
        `Logged-in successfully by email - ${credentials.user_email}`,
        "success"
      );
    } else {
      showAlert(json.error, "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="d-flex">
      <Carousel />
      <div className="col-md-4">
        <div className="h-100 d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <h2>Welcome Back!</h2>
              <p>Sign in to continue to Application.</p>
            </div>
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">
                Username :
              </label>
              <input
                type="email"
                className="form-control"
                id="user_email"
                name="user_email"
                value={credentials.user_email}
                placeholder="test@gmail.com"
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="user_pass" className="form-label">
                Password :
              </label>
              <input
                type="password"
                className="form-control"
                id="user_pass"
                name="user_pass"
                value={credentials.user_pass}
                onChange={onChange}
                minLength={6}
                required
              />
            </div>
            <div className="mb-4">
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </div>
            <p>
              Don't have an account?{" "}
              <Link className="card-link" to="/register">
                Signup now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
