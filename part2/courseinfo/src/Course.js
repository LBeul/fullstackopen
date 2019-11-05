import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ courses }) => {
  const listOfCourses = () =>
    courses.map((course, i) => (
      <div key={i}>
        <Header courseName={course.name} />
        <Content partsList={course.parts} />
        <Total partsList={course.parts} />
      </div>
    ));

  return <>{listOfCourses()}</>;
};

export default Course;
