import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import histContext from "../context/histContext";

const Register = () => {
  const context = useContext(histContext);
  const { showAlert } = context;
  const host = "http://localhost:5000";
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(`${host}/api/auth/new_user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    setCredentials({
      name: "",
      email: "",
      password: "",
      cpassword: "",
    });

    if (json.success) {
      navigate("/login");
      showAlert(
        `Account created successfully by email - ${credentials.email}`,
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
              <h2>Welcome!</h2>
              <p>Sign up to continue to Application.</p>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name :
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={credentials.name}
                placeholder="John Watson"
                onChange={onChange}
                minLength={2}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="r_email" className="form-label">
                Username :
              </label>
              <input
                type="email"
                className="form-control"
                id="r_email"
                name="email"
                value={credentials.email}
                placeholder="test@gmail.com"
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="r_password" className="form-label">
                Password :
              </label>
              <input
                type="password"
                className="form-control"
                id="r_password"
                name="password"
                value={credentials.password}
                onChange={onChange}
                minLength={6}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="r_cpassword" className="form-label">
                Confirm Password :
              </label>
              <input
                type="password"
                className="form-control"
                id="r_cpassword"
                name="cpassword"
                value={credentials.cpassword}
                onChange={onChange}
                minLength={6}
                required
              />
            </div>
            <div className="mb-4">
              <button type="submit" className="btn btn-primary w-100">
                SignUp
              </button>
            </div>
            <p>
              Already have an account?{" "}
              <Link className="card-link" to="/login">
                Signin now
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
