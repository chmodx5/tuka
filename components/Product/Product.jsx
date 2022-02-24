import { useState } from "react";
import Image from "next/image";

const Product = () => {
  const [mainImage, setMainImage] = useState(
    "https://source.unsplash.com/random"
  );
  const [primaryImage, setPrimaryImage] = useState(
    "https://source.unsplash.com/random"
  );
  const [secondaryImage, setsecondaryImage] = useState(
    "https://source.unsplash.com/1YrqIWe06S8"
  );
  return (
    <div>
      <div className="w-full group">
        <div className="bg-blue-300 relative aspect-square">
          <Image
            src={mainImage}
            alt="alt"
            className="w-full h-full object-center object-cover "
            layout="fill"
            priority
            onMouseOver={() => setMainImage(secondaryImage)}
            onMouseOut={() => setMainImage(primaryImage)}
          />
          <div className=" hidden group-hover:flex justify-center py-3 absolute bottom-0 w-full ">
            <button className=" bg-white hover:bg-black hover:text-white px-3 py-1 rounded-full capitalize font-semibold">
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="py-3 text-center">
        <p className="text-center text-sm">
          <small className=" uppercase">Brand</small>
        </p>
        <h3 className="font-semibold mb-1 capitalize text-lg">product name</h3>

        <p> Kes: 3,000</p>
      </div>
    </div>
  );
};

export default Product;
