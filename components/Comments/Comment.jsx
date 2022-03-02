import React from "react";
import Rating from "../Rating/AppRating";

const Comment = () => {
  return (
    <div className="py-10 bg-gray-100">
      <Rating small />
      <div className="mt-5">
        <p className="mb-3">
          <span className="font-bold">Someone </span> on Jul 14,2022
        </p>
        <h3 className="font-semibold mb-6">Woow that is awesome yoo</h3>
        <p className=" font-light text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis totam,
          deleniti repudiandae alias reiciendis cupiditate aperiam quia Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptate et in
          deleniti officia, unde, reprehenderit vitae natus tempore magni ad
          nemo tempora inventore? Molestias, illum laborum dolorem quos nam
          nulla.
        </p>
      </div>
    </div>
  );
};

export default Comment;
