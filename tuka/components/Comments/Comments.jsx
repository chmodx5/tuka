import React from "react";
import Rating from "../Rating/AppRating";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div>
      <h3 className="text-3xl font-bold ">Customer Reviews </h3>
      <div className="py-10">
        <Rating />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
