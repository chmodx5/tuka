import React from "react";
import Image from "next/image";

const Collection = ({ title }) => {
  return (
    <div>
      <div>
        <div className="w-1/2 mx-auto group mb-5">
          <div className="bg-gray-200 rounded-full relative aspect-square">
            <Image
              src="/collection-image.png"
              alt="alt"
              className="w-full rounded-full h-full object-center object-cover z-0 "
              layout="fill"
              priority
            />
          </div>
        </div>
        <h5 className="font-semibold text-center">
          {title} <sup className=" text-xs">12</sup>
        </h5>
      </div>
    </div>
  );
};

export default Collection;
