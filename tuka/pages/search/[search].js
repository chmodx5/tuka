import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  List,
  ListItem,
  Checkbox,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Slider,
} from "@mui/material";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRangeSlider, setPriceRangeSlider] = useState([5, 80]);
  //getting a list of all categories
  useEffect(() => {
    axios.get(`http://localhost:3999/categories/`).then((response) => {
      setCategory(response.data);
    });
  }, []);

  // get search input from the url
  useEffect(() => {
    setSearch(router.query.search);
  }, [router.query.search]);

  // validating the search input and fetch data using axios
  useEffect(() => {
    if (search !== "") {
      axios
        .get(`http://localhost:3999/products/search/${search}`)
        .then((response) => {
          setSearchResults(response.data);
        });
    }
  }, [search]);

  //handling the category check input
  const handleCheckEvent = (e, categoryid) => {
    let somearray = [...selectedCategories];
    if (e.target.checked === true) {
      let filtered = category.filter((item) => item.id === categoryid)[0];
      somearray.push(filtered);
      setSelectedCategories(somearray);
      console.log(somearray);
    } else {
      let filtered = category.filter((item) => item.id === categoryid)[0];
      somearray.splice(somearray.indexOf(filtered), 1);
      setSelectedCategories(somearray);
      console.log(somearray);
    }
  };

  const handleChange = (event, newValue, activeThumb) => {
    const minDistance = 10;

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

  useEffect(() => {}, []);

  return (
    <section className="grid grid-cols-12 gap-6 app__section">
      <div className="col-span-4 md:col-span-4 lg:col-span-3 space-y-6 ">
        {/* START filter by category */}
        <div className="app__card">
          <h4 className="px-3 font-semibold">Category</h4>
          <List dense>
            {category && category.length > 0 && (
              <>
                {category.map((category) => {
                  return (
                    <ListItem
                      key={[category.id]}
                      className="hover:bg-primary group hover:text-white"
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          className="group-hover:text-white"
                          onChange={(e) => handleCheckEvent(e, category.id)}
                          inputProps={{ "aria-labelledby": category.name }}
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText id={category.id}>
                          <span className="text-sm font-sans">
                            <>{category.name}</>
                          </span>
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </>
            )}
          </List>
        </div>
        {/* END filter by category */}

        {/* START filter by price range *with slider* */}
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
              // color="primary"
              colorPrimary
              max={100000}
              // getAriaValueText={valuetext}
            />
            <div className="flex justify-between">
              <span>
                <input
                  className=" dark:bg-gray-900 outline-gray-300 focus:outline-primary outline-2 outline rounded-sm inline-block px-1 py-1 w-full text-xs"
                  type="number"
                  value={priceRangeSlider[0]}
                />
              </span>
              <span className="px-1">-</span>
              <span>
                <input
                  className="dark:bg-gray-900 outline-gray-300 focus:outline-primary outline-2 outline rounded-sm inline-block px-1 py-1 w-full text-xs"
                  type="number"
                  value={priceRangeSlider[1]}
                />
              </span>
            </div>
          </div>
        </div>
        {/* END filter by price range */}
      </div>
      <div className="col-span-8">
        {/* START search results */}
        {/* START top section with sort options */}
        {/* START sort options */}
        {/* END sort options */}
        {/* START grid customization option */}
        {/* END grid customization option */}
        {/* END top section with sort options */}
        {/* START search results list */}
        {/* END search results list */}
        {/* START pagination */}
        {/* END pagination */}
        {/* END search results */}
        adipisci nam optio sapiente praesentium quibusdam neque.
      </div>
    </section>
  );
};

export default Search;
