import { FaStarHalfAlt, FaStar, FaRegStar } from "react-icons/fa";

export default function AppRating({ small, rating }) {
  return (
    <div className={`flex gap-2 ${small ? "text-xs" : "text-xl"}`}>
      {rating >= 1 ? (
        <FaStar className=" text-primary" />
      ) : rating >= 0.5 ? (
        <FaStarHalfAlt className=" text-primary" />
      ) : (
        <FaRegStar className=" text-primary" />
      )}
      {rating >= 2 ? (
        <FaStar className=" text-primary" />
      ) : rating >= 1.5 ? (
        <FaStarHalfAlt className=" text-primary" />
      ) : (
        <FaRegStar className=" text-primary" />
      )}
      {rating >= 3 ? (
        <FaStar className=" text-primary" />
      ) : rating >= 2.5 ? (
        <FaStarHalfAlt />
      ) : (
        <FaRegStar className=" text-primary" />
      )}
      {rating >= 4 ? (
        <FaStar className=" text-primary" />
      ) : rating >= 3.5 ? (
        <FaStarHalfAlt className=" text-primary" />
      ) : (
        <FaRegStar className=" text-primary" />
      )}
      {rating >= 5 ? (
        <FaStar className=" text-primary" />
      ) : rating >= 4.5 ? (
        <FaStarHalfAlt className=" text-primary" />
      ) : (
        <FaRegStar className=" text-primary" />
      )}
    </div>
  );
}
