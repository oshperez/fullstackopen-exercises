const initialState = {
  message: null,
  active: false,
  duration: null
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET":
      const {data: {message, duration}} = action
      return {
        message,
        active: true,
        duration,
      };
    case "HIDE":
      return { message: null, active: false };
    default:
      return state;
  }
};

export const setNotification = (message, duration) => {
  return (dispatch) => {
    const data = { message, duration };
    dispatch({
      type: "SET",
      data,
    });
  };
};

export const hideNotification = () => {
  return {
    type: "HIDE",
  };
};

export default notificationReducer;
