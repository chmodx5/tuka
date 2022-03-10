import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Product = ({ category, img, id, price, title, small }) => {
  return (
    <Link href={`/product/${id}`} passHref>
      <div className=" hover:cursor-pointer">
        <div className="w-full group">
          <div className="bg-blue-300 relative aspect-square">
            {img ? (
              <Image
                src={img}
                alt="alt"
                className="w-full h-full object-center object-cover "
                layout="fill"
                priority
              />
            ) : (
              <div className="h-full w-full bg-gray-400">loading.....</div>
            )}
          </div>
        </div>
        <div className="py-3 text-center">
          <p className="text-center text-sm">
            <small className=" uppercase">{category}</small>
          </p>
          <h3
            className={`font-semibold mb-1 capitalize ${
              small ? "text-sm" : ""
            }`}
          >
            {title ? (
              title.length > 50 ? (
                <span>{title.slice(0, 25) + "..."}</span>
              ) : (
                <span>{title}</span>
              )
            ) : (
              <span>loading</span>
            )}
          </h3>

          <p> Kes: {price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
