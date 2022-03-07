import React from "react";
import Product from "../Product/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RecommendedProducts = ({ products }) => {
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
    <section className="app__section">
      <h2 className="app__section-heading">Recommended products</h2>

      <Slider {...settings} className="grid gap-10 first:pl-0">
        {products !== null &&
          products.map((product) => (
            <div
              key={product.id}
              className="pr-10 group  group-first:pr-10 group-last:pr-0"
            >
              <Product
                key={product.id}
                id={product.id}
                category={products.category}
                img={product.image}
                price={product.price}
                title={product.name}
              />
            </div>
          ))}
      </Slider>
    </section>
  );
};

export default RecommendedProducts;
