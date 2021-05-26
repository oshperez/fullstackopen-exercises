const PersonForm = ({
  name,
  number,
  handleSubmit,
  handleNameChange,
  handleNumberChange,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input required value={name} onChange={handleNameChange} />
      </div>
      <div>
        number: <input required value={number} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
