import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
      <nav className="md:mx-24 flex-1 justify-between">
        <a className="btn btn-ghost font-semibold text-2xl ">Firebase Auth</a>
        <ul>
          <Link
            className="text-xl font-normal ml-12 hover:text-purple-400"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-xl font-normal ml-12 hover:text-purple-400"
            to="/register"
          >
            Register
          </Link>
          <Link
            className="text-xl font-normal ml-12 hover:text-purple-400"
            to="/login"
          >
            Login
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
