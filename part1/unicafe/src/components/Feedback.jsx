import Button from "./Button";

const Feedback = ({ handleClick }) => {
  return (
    <div className="row gy-3 py-3">
      <h1 className="display-6 bg-secondary text-light py-1 ">
        Give a feedback
      </h1>
      <Button handleClick={handleClick} text="good" />
      <Button handleClick={handleClick} text="neutral" />
      <Button handleClick={handleClick} text="bad" />
    </div>
  );
};

export default Feedback;
