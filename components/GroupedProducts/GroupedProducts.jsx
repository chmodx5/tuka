import React from "react";
import Product from "../Product/Product";

const GroupedProducts = () => {
  return (
    <section className="py-10">
      <div className="mb-10">
        <h2 className="font-semibold text-center text-3xl">
          This weeks highlights
        </h2>
      </div>
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
