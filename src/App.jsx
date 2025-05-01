import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import data from "./data";

function App() {
  const [category, setCategory] = useState("All");

  const categories = ["All", "DSA", "Web Development", "Android Apps", "Game Development"];

  const filteredData =
    category === "All" ? data : data.filter((item) => item.category === category);

  return (
    <div>
      <Navbar />
      <Filter categories={categories} setCategory={setCategory} />
      <Cards courses={filteredData} />
    </div>
  );
}

export default App;
