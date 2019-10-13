import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistic = props => {
  // Destructure props' values
  const { text, value } = props;
  // Statistic template
  return (
    <>
      {text}: {value} <br />
    </>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  // Variables for statistic values
  const totalClicks = good + neutral + bad;
  let avgClicks = (good - bad) / totalClicks;
  let positiveClicks = (good / totalClicks) * 100 + "%";
  // Validate if feedback was already given
  if (totalClicks === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={totalClicks} />
        <Statistic text="Average" value={avgClicks} />
        <Statistic text="Positive" value={positiveClicks} />
      </>
    );
  }
};

const Button = props => {
  // Destructure props' values
  const { text, handler } = props;
  // Button template
  return (
    <button
      onClick={() => {
        handler();
      }}
    >
      {text}
    </button>
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
      <Button text="Good" handler={onGoodClick} />
      <Button text="Neutral" handler={onNeutralClick} />
      <Button text="Bad" handler={onBadClick} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
