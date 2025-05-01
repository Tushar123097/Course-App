import React from "react";
import Card from "./Card";

function Cards({ courses }) {
  return (
    <div className="flex flex-wrap gap-6 justify-center mt-6">
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards;
