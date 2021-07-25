import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotification} from "../reducers/notificationReducer";
import Anecdote from "./Anecdote";

const AnecdoteList = (props) => {
  const anecdotes = useSelector((state) => state.anecdotes);
  const dispatch = useDispatch();
  
  const filter = useSelector((state) => state.filter);
  const regex = new RegExp(`${filter}`, `i`);

  const vote = (id) => {
    const votedAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    dispatch(addVote(votedAnecdote));
    dispatch(setNotification(`you voted ${votedAnecdote.content}`, 5));
  };

  const anecdotesToRender = filter
    ? anecdotes.filter((anecdote) => regex.test(anecdote.content))
    : anecdotes;

  return (
    <div>
      {anecdotesToRender
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} />
        ))}
    </div>
  );
};

export default AnecdoteList;
