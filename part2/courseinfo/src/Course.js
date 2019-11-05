import React from "react";
import Header from "./Header";
import Content from "./Content";

const Course = ({ course }) => {
  return (
    <>
      <Header courseName={course.name} />
      <Content partsList={course.parts} />
    </>
  );
};

export default Course;
