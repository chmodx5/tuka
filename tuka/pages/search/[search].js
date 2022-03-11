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
} from "@mui/material";

const Search = () => {
  const router = useRouter();
  const [checked, setChecked] = useState([1]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [category, setCategory] = useState(null);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState();
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

  useEffect(() => {}, []);

  return (
    <section className="grid grid-cols-12 gap-6 app__section">
      <div className="col-span-4 space-y-6">
        {/* START filter by category */}
        <div className="bg-gray-100 shadow-md py-4 rounded">
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

        {/* START filter by price range */}

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
