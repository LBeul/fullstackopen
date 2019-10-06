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
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content
        part1={parts[0].name}
        exercises1={parts[0].exercises}
        part2={parts[1].name}
        exercises2={parts[1].exercises}
        part3={parts[2].name}
        exercises3={parts[2].exercises}
      />
      <Total
        exercisesTotal={
          parts[0].exercises + parts[1].exercises + parts[2].exercises
        }
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
