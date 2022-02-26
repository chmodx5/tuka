import React from "react";
import Collection from "./Collection";

const TrendingCollecions = () => {
  return (
    <section className="app__section">
      <h1 className="app__section-heading">Trending Collections</h1>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
        <Collection />
        <Collection />
        <Collection />
        <Collection />
        <Collection />
      </div>
    </section>
  );
};

export default TrendingCollecions;
