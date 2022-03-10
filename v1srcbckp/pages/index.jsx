import GroupedProducts from "../components/GroupedProducts/GroupedProducts";
import Hero from "../components/Hero/Hero";
import { useState, useEffect } from "react";
import RecommendedProducts from "../components/RecommendedProducts/RecommendedProducts";
import TrendingCollecions from "../components/TrendingCollections.jsx/TrendingCollecions";
import axios from "axios";

export default function home() {
  const [products, setProducts] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState(null);

  useEffect(() => {
    try {
      axios.get("http://localhost:3000/products/featured").then((response) => {
        setProducts(response.data);
        console.log("featured");
        console.log(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      axios
        .get("http://localhost:3000/products/products/recommended")
        .then((response) => {
          setRecommendedProducts(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Hero />
      <p>Lorem</p>
      <TrendingCollecions />
      <GroupedProducts getProducts={products} />
      <RecommendedProducts products={recommendedProducts} />
    </>
  );
}
