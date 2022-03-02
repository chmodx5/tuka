import React from "react";
import Rating from "../Rating/AppRating";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-10">Reviews </h3>
      <Rating />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
