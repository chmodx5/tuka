import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import AppTabs from "../../components/AppTab/AppTabs";
import { ContactsOutlined } from "@mui/icons-material";

const ProductDetails = () => {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [counter, setCounter] = useState(0);
  const [productid, setProductid] = useState(0);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    setProductid(router.query.id);

    if (productid) {
      console.log(productid);
      axios
        .get(`http://localhost:3000/api/product/${productid}`)
        .then((response) => {
          setProduct(response.data);
          console.log("setProduct");
          console.log("product: " + response.data + "product" + product);
        });
    } else {
      console.log("no product id");
    }
  }, [router.query.id, productid, product]);

  return (
    <>
      <h1>-----{productid} --</h1>
      {product ? <p>{product.name}</p> : <p>loading...</p>}

      {product ? (
        <div>
          {/* top section with product images  */}

          <div className="grid grid-cols-12 ">
            <div className="col-span-1 flex flex-col gap-y-2">
              <div className="border border-black p-2">
                <div className="bg-blue-300 relative aspect-square">
                  <Image
                    src={product.image}
                    alt="alt"
                    className="w-full h-full object-center object-cover "
                    layout="fill"
                    priority
                  />
                </div>
              </div>
              <div className="border border-black p-2">
                <div className="bg-blue-300 relative aspect-square">
                  <Image
                    src={product.image}
                    alt="alt"
                    className="w-full h-full object-center object-cover "
                    layout="fill"
                    priority
                  />
                </div>
              </div>
              <div className="border border-black p-2">
                <div className="bg-blue-300 relative aspect-square">
                  <Image
                    src={product.image}
                    alt="alt"
                    className="w-full h-full object-center object-cover "
                    layout="fill"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="col-span-5 group">
              <div className=" bg-gray-500">
                <Carousel responsive={responsive}>
                  <div className="bg-blue-300 relative h-['30em'] aspect-square">
                    <Image
                      src={product.image}
                      alt="alt"
                      className="w-full h-full object-center object-cover "
                      layout="fill"
                      priority
                    />
                  </div>
                </Carousel>
              </div>
            </div>

            <div className="col-span-6 pl-10 pt-10">
              <p className="text-base text-gray-400 capitalize mb-4">
                {product.category}
              </p>
              <h4 className="font-semibold capitalize text-2xl mb-6">
                {product.name}
              </h4>
              <p className="text-xl">
                kes: {product.price}
                <span className="ml-3 text-lg text-gray-400 line-through">
                  kes: {product.slashedPrice}
                </span>
              </p>
              <div className="flex gap-3 py-14">
                <div className="flex gap-4 items-center text-2xl font-bold">
                  <button
                    className="font-bold  bg-gray-300 inline-block h-10 w-10  "
                    onClick={() => setCounter(counter - 1)}
                  >
                    -
                  </button>
                  <div> {counter} </div>
                  <button
                    className="font-bold  bg-gray-300 inline-block h-10 w-10 "
                    onClick={() => setCounter(counter + 1)}
                  >
                    +
                  </button>
                </div>
                <Link href="/" passHref>
                  <button className="app__btn-outline w-full">
                    add to cart
                  </button>
                </Link>
              </div>
              <div>
                <small>Shipping </small>
                <small className="font-bold">Kes : 3000</small>
                <p className="mt-10">{product.description}</p>
              </div>
            </div>
          </div>
          {/* sectioon with more description tabs */}
          <div>
            <AppTabs></AppTabs>
          </div>
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
