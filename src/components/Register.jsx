import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { user, createUser } = useContext(AuthContext);
  // console.log(user);
  // console.log(createUser);

  const handleRegister = (event) => {
    // 1. prevent page refresh
    event.preventDefault();

    setError("");
    setSuccess("");

    // 2. collect form data
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    // password validation with regular expression

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add at least one uppercase");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Please add at least two numbers");
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError("Please add at least one special character");
      return;
    } else if (password.length < 6) {
      setError("Please add at least 6 characters in your password");
      return;
    }

    //3. create user in firebase
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setError("");
        setSuccess("User has been created successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200 md:mx-24">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Please Register!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
                className="input input-bordered"
              />
            </div>
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
                <div className="">
                  <small>
                    Already have an account? Please
                    <Link to="/login">
                      <button className="btn btn-link">Login</button>
                    </Link>{" "}
                  </small>
                </div>
              </label>
              <p className="text-red-700">{error}</p>
              <p className="text-emerald-500">{success}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
