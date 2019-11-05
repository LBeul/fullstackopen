import React from "react";
import Part from "./Part";

const Content = ({ partsList }) => {
  console.log(partsList);
  const parts = () =>
    partsList.map((part, i) => (
      <Part partName={part.name} partExercises={part.exercises} key={i} />
    ));
  return <div>{parts()}</div>;
};

export default Content;
