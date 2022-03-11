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
import CategoryFilter from "../../components/SearchPage/CategoryFilter";
import PriceRangeFilter from "../../components/SearchPage/PriceRangeFilter";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [priceRangeSlider, setPriceRangeSlider] = useState([5, 80]);

  const [category, setCategory] = useState(null);
  //states for filterting category
  const [selectedCategories, setSelectedCategories] = useState([]);

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

  return (
    <section className="grid grid-cols-12 gap-6 app__section">
      <div className="col-span-12 md:col-span-4 lg:col-span-3 space-y-6 ">
        {/* START filter by category */}
        <CategoryFilter
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          category={category}
        />
        {/* END filter by category */}
        {/* START filter by price range *with slider* */}
        <PriceRangeFilter
          priceRangeSlider={priceRangeSlider}
          setPriceRangeSlider={setPriceRangeSlider}
        />
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
