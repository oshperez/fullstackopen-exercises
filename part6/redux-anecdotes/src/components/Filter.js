import { connect } from "react-redux";
import { newFilter } from "../reducers/filterReducer";

const Filter = ({ newFilter }) => {
  const handleChange = (event) => {
    event.preventDefault();
    const filter = event.target.value;
    newFilter(filter);
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    newFilter: (filter) => {
      dispatch(newFilter(filter));
    },
  };
};

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);

export default ConnectedFilter;
