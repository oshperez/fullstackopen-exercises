import { useState } from "react";
import Feedback from "./components/Feedback";
import Statistics from "./components/Statistics";

function App() {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0,
    average: 0,
    positive: 0,
  });

  const giveFeedback = (category) => {
    //Clones the state
    const updatedFeedback = { ...feedbacks };

    // Declares two variable for future calculations
    let average;
    let positive;

    // Adds 1 to whatever feedback was given
    updatedFeedback[category] += 1;

    //Increases the total by one
    updatedFeedback.all += 1;

    //Calculates average positive feedback
    average =
      (updatedFeedback.good - updatedFeedback.bad) / updatedFeedback.all;
    updatedFeedback.average = Math.round(average * 100) / 100;

    //Calculates positve feedback percentage
    positive = (updatedFeedback.good * 100) / updatedFeedback.all;
    updatedFeedback.positive = Math.round(positive * 100) / 100;

    // Updates the state
    setFeedbacks(updatedFeedback);
  };

  return (
    <div
      className="container px-5 mx-auto my-2 bg-light"
      style={{ maxWidth: "400px" }}
    >
      <Feedback handleClick={giveFeedback} />
      <Statistics statistics={feedbacks} />
    </div>
  );
}

export default App;
