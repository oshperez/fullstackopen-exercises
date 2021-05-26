//Helper function
export const setElementClass = (text) => {
  return text === "good"
    ? "primary"
    : text === "neutral"
    ? "success"
    : text === "bad"
    ? "danger"
    : text === "all"
    ? "dark"
    : text === "average"
    ? "info"
    : text === "positive"
    ? "warning"
    : "";
};

const Button = ({ handleClick, text }) => {
  return (
    <div className="col-md-auto">
      <button
        className={`btn btn-${setElementClass(text)}`}
        onClick={() => handleClick(text)}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
