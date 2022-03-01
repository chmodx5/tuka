import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const ProductDetails = () => {
  const router = useRouter();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${router.query.id}`)
      .then((response) => {
        setProduct(response.data);
      });
    console.log("category", product);
  }, []);
  return (
    <>
      {product.title ? (
        <div>
          <p className="text-sm text-gray-400 capitalize mb-4">electronics</p>

          <h4 className="font-semibold capitalize text-2xl mb-2">
            title {product.title}
          </h4>
          <p>
            kes: {product.price}
            <span className="ml-3 text-sm text-gray-400">kes: 400</span>
          </p>
        </div>
      ) : (
        <div className=" p-4  w-full">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="w-2/12 h-8 bg-gray-300 rounded"></div>
              <div className="w-4/12 aspect-video bg-gray-300 rounded"></div>
              <div className="space-y-3">
                <div className="bg-gray-300 rounded h-5 w-3/12"></div>
                <div className="h-60 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
