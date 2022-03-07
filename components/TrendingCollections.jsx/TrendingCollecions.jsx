import React, { useState, useEffect } from "react";
import Collection from "./Collection";
import axios from "axios";

const TrendingCollecions = () => {
  const [categorys, setCategorys] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products/categories")
      .then((response) => {
        setCategorys(response.data);
      });
    console.log("category", categorys, "end category");
  }, []);
  return (
    <section className="app__section">
      <h1 className="app__section-heading">Trending Collections</h1>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
        {categorys &&
          categorys.map((category) => (
            <Collection title={category.name} key={category.id} />
          ))}
      </div>
    </section>
  );
};

export default TrendingCollecions;
