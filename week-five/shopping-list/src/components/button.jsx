const Button = ({ value, btnClass, type }) => {
  return <button className={btnClass} type={type}>{value}</button>;
};

export default Button;
