import React from "react";
import Image from "next/image";
import Link from "next/link";

const Slide = () => {
  return (
    <div className="grid grid-cols-12 h-full ">
      <div className="col-span-6 flex items-center px-6 ">
        <div className="w-3/4">
          <p className="text-red-500 font-bold mb-5">🔥 Hot Deal This Week</p>
          <h2 className="text-4xl font-bold mb-10">
            Bluetooth Wireless Earbuds Headphone
          </h2>
          <Link passHref href="/">
            <button className="app__btn-outline">shop now</button>
          </Link>
        </div>
      </div>
      <div className="col-span-6 h-full">
        <div className="h-96 flex justify-end ">
          <div className=" relative h-full aspect-square ">
            <Image
              src="/collection-image.png"
              alt="alt"
              className=" object-center object-cover "
              layout="fill"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
