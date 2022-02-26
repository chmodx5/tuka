import React from "react";
import Product from "../Product/Product";

const GroupedProducts = () => {
  return (
    <section className="app__section">
      <h2 className="app__section-heading">This weeks highlights</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default GroupedProducts;
