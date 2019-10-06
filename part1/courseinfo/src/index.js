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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1.name}
        exercises1={part1.exercises}
        part2={part2.name}
        exercises2={part2.exercises}
        part3={part3.name}
        exercises3={part3.exercises}
      />
      <Total
        exercisesTotal={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
