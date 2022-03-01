import GroupedProducts from "../components/GroupedProducts/GroupedProducts";
import Hero from "../components/Hero/Hero";
import { useState, useEffect } from "react";
import RecommendedProducts from "../components/RecommendedProducts/RecommendedProducts";
import TrendingCollecions from "../components/TrendingCollections.jsx/TrendingCollecions";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
    console.log("category", products);
  }, []);

  return (
    <>
      <Hero />
      <TrendingCollecions />
      <GroupedProducts products={products} />
      <RecommendedProducts />
    </>
  );
}
