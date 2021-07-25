const filterReducer = (state = null, action) => {
  switch (action.type) {
    case "FILTER":
      const filter = action.data.filter
      return filter ? filter : null

    default:
      return state;
  }
};

export const newFilter = (filter) => {
  return {
      type: "FILTER",
      data: {
        filter,
      },
    };
  

};
export default filterReducer;
