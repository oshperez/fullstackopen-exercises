import anecdoteServices from "../services/anecdote";

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ANECDOTES":
      return action.data;
    case "ADD_VOTE":
      const votedAnecdote = action.data;
      return state.map((anecdote) =>
        anecdote.id === votedAnecdote.id ? votedAnecdote : anecdote
      );
    case "CREATE_ANECDOTE":
      const newAnecdote = action.data;
      return [...state, newAnecdote];

    default:
      return state;
  }
};

export const addVote = (anecdote) => {
  return async (dispatch) => {
    const votedAnecdote = await anecdoteServices.addVote(anecdote);
    dispatch({
      type: "ADD_VOTE",
      data: votedAnecdote,
    });
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteServices.createNew(content);
    dispatch({
      type: "CREATE_ANECDOTE",
      data: newAnecdote,
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes,
    });
  };
};

export default anecdoteReducer;
