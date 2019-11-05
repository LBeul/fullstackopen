import React from "react";

const Total = ({ partsList }) => {
  const exercisesTotal = partsList
    .map(element => element.exercises)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
  return <p>Number of exercises {exercisesTotal}</p>;

  // return <p>Number of Exercises {exercisesTotal}</p>;
};

export default Total;
