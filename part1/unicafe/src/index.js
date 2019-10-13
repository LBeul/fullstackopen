import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  // State initialization
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Event listeners
  const onGoodClick = () => {
    setGood(good + 1);
  };
  const onNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const onBadClick = () => {
    setBad(bad + 1);
  };

  const totalClicks = good + neutral + bad;
  let avgClicks;
  let positiveClicks;
  if (totalClicks === 0) {
    avgClicks = "";
    positiveClicks = "";
  } else {
    avgClicks = (good - bad) / totalClicks;
    positiveClicks = (good / totalClicks) * 100 + "%";
  }

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => onGoodClick()}>Good</button>
      <button onClick={() => onNeutralClick()}>Neutral</button>
      <button onClick={() => onBadClick()}>Bad</button>
      <h1>statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {totalClicks}</p>
      <p>Average: {avgClicks}</p>
      <p>Positive: {positiveClicks}</p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
