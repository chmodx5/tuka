import React from "react";
import Product from "../Product/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommendedProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="py-10">
      <div className="mb-10">
        <h2 className="app__section-heading">Recommended products</h2>
      </div>
      <Slider {...settings} className="gap-10 first:pl-0">
        {Array.from({ length: 10 }, (_, i) => (
          <div className="px-2">
            <Product />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RecommendedProducts;
