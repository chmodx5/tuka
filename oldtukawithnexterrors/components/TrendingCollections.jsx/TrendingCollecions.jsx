import React, { useState, useEffect } from "react";
import Collection from "./Collection";
import axios from "axios";

const TrendingCollecions = () => {
  const [categorys, setCategorys] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/categories/featured").then((response) => {
      setCategorys(response.data);
    });
    console.log("category", categorys, "end category");
  }, []);
  return (
    <section className="app__section">
      <h1 className="app__section-heading">Trending Collections</h1>
      <div className="grid grid-cols-3 gap-10 md:grid-cols-6">
        {categorys &&
          categorys
            .slice(0, 6)
            .map((category) => (
              <Collection title={category.name} key={category.id} />
            ))}
      </div>
    </section>
  );
};

export default TrendingCollecions;
