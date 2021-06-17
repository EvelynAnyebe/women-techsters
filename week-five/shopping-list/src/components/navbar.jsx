import logo from "./../logo.svg";
import Button from "./button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./StateProvider";

const Navbar = () => {

  const {state}=useContext(AppContext);
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">
              <Button value="Register" btnClass="btn" />
            </Link>
          </li>
          <li>
          { (state.hasOwnProperty("isLoggedIn") && state.isLoggedIn)
          ? <Button value="Logout" btnClass="btn" />
          :(
            <Link to="/login">
              <Button value="Login" btnClass="btn" />
            </Link>
          )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
