// Reusable button component for images

function Button({ value, clickHandler }) {
  return (
    <button className="btn" onClick={clickHandler}>
      {value}
    </button>
  );
}

export default Button;
