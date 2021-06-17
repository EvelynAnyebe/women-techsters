import Button from "./button";
import { useContext } from "react";
import { AppContext } from "./StateProvider";

const Hero = () => {
  const {state} =useContext(AppContext);
  return (
    <header>
      <div className="header-content">
        <h1>Welcome to Shopping List Manager</h1>
        <p>
          { (state.hasOwnProperty("isLoggedIn") && state.isLoggedIn)
          ? "Welcome User"
          : `Find is difficult ro remember your shopping list? You are in the right place `
          }
          
        </p>
        <Button value="Start here" btnClass="" />
      </div>
    </header>
  );
};

export default Hero;
