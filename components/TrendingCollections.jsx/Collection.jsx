import React from "react";
import Image from "next/image";

const Collection = () => {
  return (
    <div>
      <div>
        <div className="w-full group mb-5">
          <div className=" relative aspect-square">
            <Image
              src="/collection-image.png"
              alt="alt"
              className="w-full h-full object-center object-cover z-0 "
              layout="fill"
              priority
            />
            <div className=" -z-10 group flex justify-center py-3 items-cente absolute h-full bottom-0 w-full ">
              <div className="rounded-full group-hover:scale-110 aspect-square w-full bg-gray-200"></div>
            </div>
          </div>
        </div>
        <h5 className="font-semibold text-center">
          Headphones <sup className=" text-xs">12</sup>
        </h5>
      </div>
    </div>
  );
};

export default Collection;
