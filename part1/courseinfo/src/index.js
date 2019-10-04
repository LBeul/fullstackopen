import React from "react";
import ReactDOM from "react-dom";

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Part = props => {
  return (
    <p>
      {props.partId} {props.partExercises}
    </p>
  );
};

const Content = props => {
  return (
    <div>
      <Part partId={props.part1} partExercises={props.exercises1} />
      <Part partId={props.part2} partExercises={props.exercises2} />
      <Part partId={props.part3} partExercises={props.exercises3} />
    </div>
  );
};

const Total = props => {
  return <p>Number of Exercises {props.exercisesTotal}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        exercises1={exercises1}
        part2={part2}
        exercises2={exercises2}
        part3={part3}
        exercises3={exercises3}
      />
      <Total exercisesTotal={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
