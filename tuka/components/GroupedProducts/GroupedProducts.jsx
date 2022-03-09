import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

const GroupedProducts = ({ getProducts }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (getProducts !== null) {
      setProducts(getProducts);
    }
  }, [products, getProducts]);

  return (
    <section className="app__section">
      <h2 className="app__section-heading">This weeks highlights today</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5  gap-10">
        {products !== null &&
          products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              category={product.category}
              img={product.image}
              price={product.price}
              title={product.name}
            />
          ))}

        {/* {getProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            // category={product.category}
            img={product.image}
            price={product.price}
            title={product.name}
          />
        ))} */}
      </div>
    </section>
  );
};

export default GroupedProducts;
