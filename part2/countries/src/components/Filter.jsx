const Filter = ({filter, handleChange}) => {
  return (
    <div>
      find countries <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
}

export default Filter;