import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../buttons/MyButton";

const NavBar = () => {
  
  const {setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
      <div className="navbar">
        <MyButton onClick={logout}>
          Log out
        </MyButton>
        <div className="navbar__links">
          <Link to="/about">About</Link>
          <Link to="/posts" style={{marginLeft: "15px"}}>Posts</Link>
        </div>
    </div>
  );
}

export default NavBar;