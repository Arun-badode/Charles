import React from "react";
import "./Login.css"
const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ minWidth: "320px", maxWidth: "400px", borderRadius: "12px" }}>
        <h3 className=" text-center mb-2">Welcome BACK</h3>
        <p className="text-center text-muted mb-4">Log in to your account</p>

        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email </label>
            <input
              type="email"
              id="email"
              placeholder= "Enter Your email "
              className="form-control"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              placeholder=" Enter Your password"
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">Sign in</button>
        </form>

        <div className="text-center">
          <a href="#" className="d-block mb-2 small text-primary">Check for Invitations</a>
          <a href="#" className="small text-primary">Don't have an account? Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
