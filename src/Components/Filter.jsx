import React from "react";

function Filter({ categories, setCategory }) {
  return (
    <div className="flex justify-center gap-3 flex-wrap mt-6">
      {categories.map((cat, index) => (
        <button
          key={index}
          className="border border-gray-400 rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition"
          onClick={() => setCategory(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Filter;
