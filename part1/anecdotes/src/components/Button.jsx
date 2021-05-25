const Button = ({ text, handleClick }) => {
  return (
    <button className="btn rounded-3 btn-dark mx-2" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
