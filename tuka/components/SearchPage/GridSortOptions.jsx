import React, { useState } from "react";

const GridSortOptions = ({ selectedGrid, setSelectedGrid }) => {
  return (
    <div className="flex gap-2">
      <button
        className={` ${
          selectedGrid == 1 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded flex flex-col justify-center items-center gap-1 group`}
        onClick={(e) => setSelectedGrid(1)}
      >
        <div
          className={` ${
            selectedGrid == 1 && "bg-red-50"
          }  h-[.15em] w-5 group-hover:bg-white bg-primary `}
        />
        <div
          className={` ${
            selectedGrid == 1 && "bg-red-50"
          }  h-[.15em] w-5 group-hover:bg-white bg-primary `}
        />
        <div
          className={` ${
            selectedGrid == 1 && "bg-red-50"
          }  h-[.15em] w-5 group-hover:bg-white bg-primary `}
        />
      </button>
      <button
        className={` ${
          selectedGrid == 2 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded flex justify-center items-center gap-1 group`}
        onClick={(e) => setSelectedGrid(2)}
      >
        <div
          className={` ${
            selectedGrid == 2 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
        <div
          className={` ${
            selectedGrid == 2 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
      </button>
      <button
        className={` ${
          selectedGrid == 3 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded flex justify-center items-center gap-1 group`}
        onClick={(e) => setSelectedGrid(3)}
      >
        <div
          className={` ${
            selectedGrid == 3 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
        <div
          className={` ${
            selectedGrid == 3 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
        <div
          className={` ${
            selectedGrid == 3 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
      </button>
      <button
        className={` ${
          selectedGrid == 4 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded flex justify-center items-center gap-1 group`}
        onClick={(e) => setSelectedGrid(4)}
      >
        <div
          className={` ${
            selectedGrid == 4 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />

        <div
          className={` ${
            selectedGrid == 4 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
        <div
          className={` ${
            selectedGrid == 4 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
        <div
          className={` ${
            selectedGrid == 4 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
      </button>
      <button
        className={` ${
          selectedGrid == 5 && "bg-primary text-white"
        } h-10 w-10 bg-gray-200 hover:bg-primary hover:text-white text-xl rounded flex justify-center items-center gap-1 group`}
        onClick={(e) => setSelectedGrid(5)}
      >
        <div
          className={` ${
            selectedGrid == 5 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
        <div
          className={` ${
            selectedGrid == 5 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
        <div
          className={` ${
            selectedGrid == 5 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
        <div
          className={` ${
            selectedGrid == 5 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
        <div
          className={` ${
            selectedGrid == 5 && "bg-red-50"
          }  w-[.15em] h-5 group-hover:bg-white bg-primary py-2`}
        />
      </button>
    </div>
  );
};

export default GridSortOptions;
