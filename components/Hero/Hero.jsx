import Link from "next/link";
import React from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Hero = () => {
  return (
    <section className="bg-gray-200 h-96">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="grid grid-cols-12 h-full ">
          <div className="col-span-6 flex items-center px-6 ">
            <div className="w-3/4">
              <p className="text-red-500 font-bold mb-5">
                🔥 Hot Deal This Week
              </p>
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
        <div className="grid grid-cols-12 h-full ">
          <div className="col-span-6 flex items-center px-6 ">
            <div className="w-3/4">
              <p className="text-red-500 font-bold mb-5">
                🔥 Hot Deal This Week
              </p>
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
        <div className="grid grid-cols-12 h-full ">
          <div className="col-span-6 flex items-center px-6 ">
            <div className="w-3/4">
              <p className="text-red-500 font-bold mb-5">
                🔥 Hot Deal This Week
              </p>
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
      </Carousel>
    </section>
  );
};

export default Hero;
