const Anecdote = ({ text, anecdote, votes }) => {
  return (
    <div className="py-3">
      <h1 className="display-5">{text}</h1>
      <div className="position-relative mx-4">
        <p className="d-flex justify-content-center bg-light fs-4 py-4 my-2  rounded-3 ">
          {anecdote}
        </p>
        <p
          className="position-absolute bottom-0 end-0 badge bg-secondary fw-light px-3 py-2 fs-5"
          style={{ marginBottom: "-15px", marginRight: "-10px" }}
        >
          {votes !== null ? `votes: ${votes}` : ""}
        </p>
      </div>
    </div>
  );
};

export default Anecdote;
