import React from "react";
import Product from "../Product/Product";

const GroupedProducts = ({ products }) => {
  return (
    <section className="app__section">
      <h2 className="app__section-heading">This weeks highlights</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-10">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            category={product.category}
            img={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </section>
  );
};

export default GroupedProducts;
