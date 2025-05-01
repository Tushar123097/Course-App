import React from "react";

function Card({ course }) {
  return (
    <div className="border rounded shadow-lg p-4 w-72">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded mb-4"
      />
      <h2 className="font-bold text-lg mb-2">{course.title}</h2>
      <p className="text-sm text-gray-600 mb-2">{course.description}</p>
      <p className="text-blue-600 font-semibold">{course.price}</p>
    </div>
  );
}

export default Card;
