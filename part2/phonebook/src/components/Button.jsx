const Button = ({ label, id, handleClick }) => {
  return <button onClick={() => handleClick(id)}>{label}</button>;
};

export default Button;
