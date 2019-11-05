import React from "react";

const Total = ({ listOfParts }) => {
  const exercisesTotal =
    listOfParts[0].exercises +
    listOfParts[1].exercises +
    listOfParts[2].exercises;
  return <p>Number of Exercises {exercisesTotal}</p>;
};

export default Total;
