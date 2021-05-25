import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Anecdote from "./components/Anecdote";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const App = () => {
  //Hooks
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint8Array(anecdotes.length));
  const [mostVoted, setMostVoted] = useState(null);

  useEffect(() => {
    let maxVotes = Math.max(...points);
    if (maxVotes === 0) return;
    let newMostVoted = points.indexOf(maxVotes);
    setMostVoted(newMostVoted);
  }, [points]);

  //Event handler
  const selectAnecdote = () => {
    let newAnecdote;
    do {
      newAnecdote = Math.floor(Math.random() * anecdotes.length);
    } while (newAnecdote === selected);

    setSelected(newAnecdote);
  };

  //Event handler
  const voteAnecdote = () => {
    let newPoints = [...points];
    newPoints[selected] += 1;

    setPoints(newPoints);
  };

  return (
    <div
      className="container text-center min-vh-100 py-3 px-3"
      style={{ backgroundColor: "#9e9d89" }}
    >
      <div className="mb-5">
        <Anecdote
          text="Anecdote of the day"
          anecdote={anecdotes[selected]}
          votes={points[selected]}
        />
        <Button text="next" handleClick={selectAnecdote} />
        <Button text="vote" handleClick={voteAnecdote} />
      </div>
      <Anecdote
        text="Anecdote with most votes"
        anecdote={mostVoted !== null ? anecdotes[mostVoted] : "no upvotes yet"}
        votes={mostVoted !== null ? points[mostVoted] : null}
      />
    </div>
  );
};

export default App;
