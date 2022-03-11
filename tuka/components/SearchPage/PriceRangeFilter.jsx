import React from "react";
import { Slider } from "@mui/material";

const minDistance = 10;

const PriceRangeFilter = ({ priceRangeSlider, setPriceRangeSlider }) => {
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setPriceRangeSlider([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setPriceRangeSlider([clamped - minDistance, clamped]);
      }
    } else {
      setPriceRangeSlider(newValue);
    }
  };

  return (
    <div className="px-2 app__card ">
      <div className="flex justify-between">
        <h4 className=" font-semibold">Price range</h4>
        <button className="app__btn text-sm capitalize text-gray-400 hover:text-black">
          apply
        </button>
      </div>

      <div className=" ">
        <Slider
          value={priceRangeSlider}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
          max={100000}
        />
        <div className="flex justify-between">
          <span>
            <input
              className=" dark:bg-gray-900 outline-gray-300 focus:outline-primary outline-2 outline rounded-sm inline-block px-1 py-1 w-full text-xs"
              type="number"
              value={priceRangeSlider[0]}
              onChange={(e) =>
                setPriceRangeSlider([e.target.value, priceRangeSlider[1]])
              }
            />
          </span>
          <span className="px-1">-</span>
          <span>
            <input
              className="dark:bg-gray-900 outline-gray-300 focus:outline-primary outline-2 outline rounded-sm inline-block px-1 py-1 w-full text-xs"
              type="number"
              value={priceRangeSlider[1]}
              onChange={(e) =>
                setPriceRangeSlider([priceRangeSlider[0], e.target.value])
              }
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
