import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({ good, bad, neutral }) => {
  // Variables for statistic values
  const totalClicks = good + neutral + bad;
  let avgClicks;
  let positiveClicks;
  // Validate if output is numeral or NaN
  if (totalClicks === 0) {
    avgClicks = "";
    positiveClicks = "";
  } else {
    avgClicks = (good - bad) / totalClicks;
    positiveClicks = (good / totalClicks) * 100 + "%";
  }

  return (
    <>
      <h1>Statistics</h1>
      Good: {good}
      <br />
      Neutral: {neutral}
      <br />
      Bad: {bad}
      <br />
      All: {totalClicks}
      <br />
      Average: {avgClicks}
      <br />
      Positive: {positiveClicks}
      <br />
    </>
  );
};

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

  return (
    <>
      <h1>Give Feedback</h1>
      <button onClick={() => onGoodClick()}>Good</button>
      <button onClick={() => onNeutralClick()}>Neutral</button>
      <button onClick={() => onBadClick()}>Bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
