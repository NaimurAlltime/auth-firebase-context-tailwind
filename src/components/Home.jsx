import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const Home = () => {
  const user = useContext(AuthContext);
  return (
    <div className="md:mx-28">
      <h2> {user && <span>{user.displayName}</span>} </h2>
    </div>
  );
};

export default Home;
