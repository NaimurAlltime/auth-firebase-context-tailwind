import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { loginUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
        setError("");
        setSuccess("User Login successful!");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const logInUser = result.user;
        console.log(logInUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 md:mx-24">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Login!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter Your Password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
                <p>
                  <small>
                    New to this website? Please
                    <Link to="/register">
                      {" "}
                      <button className="btn btn-link">Register</button>{" "}
                    </Link>
                  </small>
                </p>
              </label>
              <p className="text-red-700">{error}</p>
              <p className="text-emerald-500">{success}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="text-center pb-2">
            <small>
              Sign in with
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-primary ml-2"
              >
                Google
              </button>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
