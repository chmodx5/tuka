import GroupedProducts from "../components/GroupedProducts/GroupedProducts";
import Hero from "../components/Hero/Hero";
import { useState, useEffect } from "react";
import RecommendedProducts from "../components/RecommendedProducts/RecommendedProducts";
import TrendingCollecions from "../components/TrendingCollections.jsx/TrendingCollecions";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/api/products/featured")
        .then((response) => {
          setProducts(response.data);
          console.log("featured");
          console.log(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log("category", products);

  return (
    <>
      <Hero />
      <TrendingCollecions />
      <GroupedProducts getProducts={products} />
      <RecommendedProducts />
    </>
  );
}
