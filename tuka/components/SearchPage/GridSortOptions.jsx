import React, { useState } from "react";

const GridSortOptions = ({ selectedGrid, setSelectedGrid }) => {
  return (
    <div className="flex gap-2">
      <button
        className={` ${
          selectedGrid == 1 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded`}
        onClick={(e) => setSelectedGrid(1)}
      >
        1
      </button>
      <button
        className={` ${
          selectedGrid == 2 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded`}
        onClick={(e) => setSelectedGrid(2)}
      >
        2
      </button>
      <button
        className={` ${
          selectedGrid == 3 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded`}
        onClick={(e) => setSelectedGrid(3)}
      >
        3
      </button>
      <button
        className={` ${
          selectedGrid == 4 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded`}
        onClick={(e) => setSelectedGrid(4)}
      >
        4
      </button>
      <button
        className={` ${
          selectedGrid == 5 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded`}
        onClick={(e) => setSelectedGrid(5)}
      >
        5
      </button>
    </div>
  );
};

export default GridSortOptions;
