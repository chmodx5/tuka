import GroupedProducts from "../components/GroupedProducts/GroupedProducts";
import Product from "../components/Product/Product";
import RecommendedProducts from "../components/RecommendedProducts/RecommendedProducts";
import TrendingCollecions from "../components/TrendingCollections.jsx/TrendingCollecions";

export default function Home() {
  return (
    <>
      <TrendingCollecions />
      <GroupedProducts />
      <RecommendedProducts />
    </>
  );
}
