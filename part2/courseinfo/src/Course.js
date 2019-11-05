import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Content partsList={course.parts} />
      <Total partsList={course.parts} />
    </>
  );
};

export default Course;
