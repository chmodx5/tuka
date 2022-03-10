import React, { useState, useEffect } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useRouter } from "next/router";
import axios from "axios";

const Search = () => {
  const router = useRouter();
  const [searchQuery, setsearchQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    setsearchQuery(e.target.value);

    console.log(searchQuery);
    if (searchQuery) {
      //fetch search results using axios
      let resultss = [];
      // let resultss = [{ name: "test" }, { name: "test2" }];
      axios
        .get(`http://localhost:3999/products/search/${searchQuery}`)
        .then((response) => {
          setSearchResults(response.data);
        });

      if (searchResults.length === 0) {
        console.log("no results");
      } else {
        console.log(searchResults);
        router.push(`/search/${searchQuery}`);
      }
    } else {
      setSearchResults([]);
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="flex-1">
      <form
        action=""
        className="  outline outline-1 outline-gray-300 rounded-md flex gap-2 pl-2 mx-auto"
        onSubmit={handleSearch}
      >
        <input
          type="text"
          name="search"
          className=" focus:outline-0 focus:bg-white"
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button type="submit" onClick={handleSearch} className="p-2">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
