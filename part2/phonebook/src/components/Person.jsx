import Button from "./Button";

const Person = ({ name, number, id, handleClick }) => {
  return (
    <li>
      {name} {number}{" "}
      <Button label="delete" id={id} handleClick={handleClick} />
    </li>
  );
};

export default Person;
