const Total = ({ parts }) => {
  return (
    <h4>
      total of{" "}
      {parts.map((part) => part.exercises).reduce((total, exe) => total + exe)}{" "}
      exercises
    </h4>
  );
};

export default Total;
