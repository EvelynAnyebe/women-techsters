import Button from "./button";

const Hero = () => {
  return (
    <header>
      <div className="header-content">
        <h1>Welcome to Shopping List Manager</h1>
        <p>
          Find is difficult ro remember your shopping list? You are in the right
          place
        </p>
        <Button value="Start here" btnClass="" />
      </div>
    </header>
  );
};

export default Hero;
