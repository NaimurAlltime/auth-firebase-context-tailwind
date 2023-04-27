import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSingOut = () => {
    logOut()
      .then(() => {
        Swal.fire("Good job!", "Log out successful!", "success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
            to="/orders"
          >
            Orders
          </Link>
          {user && (
            <Link
              className="text-xl font-normal ml-12 hover:text-purple-400"
              to="/profile"
            >
              Profile
            </Link>
          )}
          <Link
            className="text-xl font-normal ml-12 hover:text-purple-400"
            to="/register"
          >
            Register
          </Link>
          {user ? (
            <>
              {" "}
              <span className="ml-10 text-xl">{user.email}</span>
              <button onClick={handleSingOut} className="btn btn-xs ml-2">
                Sign out
              </button>
            </>
          ) : (
            <Link
              className="text-xl font-normal ml-12 hover:text-purple-400"
              to="/login"
            >
              Login
            </Link>
          )}
          {/* <Link
            className="text-xl font-normal ml-12 hover:text-purple-400"
            to="/login"
          >
            Login
          </Link> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
