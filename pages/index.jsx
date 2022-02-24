import GroupedProducts from "../components/GroupedProducts/GroupedProducts";
import Product from "../components/Product/Product";
import RecommendedProducts from "../components/RecommendedProducts/RecommendedProducts";

export default function Home() {
  return (
    <>
      <GroupedProducts />
      <RecommendedProducts />
    </>
  );
}
