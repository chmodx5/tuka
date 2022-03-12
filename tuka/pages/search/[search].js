import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { MdFilterList } from "react-icons/md";
import { Menu, Transition } from "@headlessui/react";
import CategoryFilter from "../../components/SearchPage/CategoryFilter";
import PriceRangeFilter from "../../components/SearchPage/PriceRangeFilter";
import GridSortOptions from "../../components/SearchPage/GridSortOptions";
import Product from "../../components/Product/Product";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [priceRangeSlider, setPriceRangeSlider] = useState([5, 80]);
  const [category, setCategory] = useState(null);
  //selceting active grid type
  const [selectedGrid, setSelectedGrid] = useState(3);

  //states for filterting category
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
    <section className="grid grid-cols-12 gap-6 app__section font-sans">
      <div className="col-span-4 md:col-span-4 lg:col-span-3 space-y-6 ">
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
      {/* START search results */}
      <div className="col-span-8">
        {/* START top section with sort options */}
        <div className="flex justify-between py-5">
          {/* START filter options */}
          <div>
            <div className=" text-right  ">
              <Menu as="div" className="relative  inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full px-2 py-2  font-semibold  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 uppercase items-center">
                    filter
                    <div
                      className="w-5 h-5 ml-2 -mr-1 text-xl  flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <MdFilterList />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute w-auto mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-10 focus:outline-none z-40">
                    <div className="px-1 py-1 min-w-max">
                      {category ? (
                        [
                          { name: "best selling", slug: "best-selling" },
                          { name: "alphabetically a-z", slug: "a-z" },
                          { name: "alphabetically z-a", slug: "z-a" },
                          { name: "price low to high", slug: "low-to-high" },
                          { name: "price high to low", slug: "high-to-low" },
                        ].map((category) => (
                          <Menu.Item key={category.id}>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? " bg-gray-900  text-white"
                                    : "text-gray-900"
                                } group capitalize flex rounded-md items-center w-full px-2 py-2 text-sm`}
                              >
                                {category.name}
                              </button>
                            )}
                          </Menu.Item>
                        ))
                      ) : (
                        <button
                          className={` "bg-violet-500 text-white" : "text-gray-900"
                     group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                        >
                          loading ..
                        </button>
                      )}

                      {/* <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-violet-500 text-white" : "text-gray-900"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    dfdsfdfadsf
                  </button>
                )}
              </Menu.Item> */}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          {/* END filter options */}
          {/* START grid customization option */}
          <div className="flex justify-between">
            <GridSortOptions
              selectedGrid={selectedGrid}
              setSelectedGrid={setSelectedGrid}
            />
          </div>
          {/* END grid customization option */}
        </div>

        {/* END top section with sort options */}

        {/* START search results list */}
        <div>
          <div className="mb-2">
            <small className="mb-2">
              {searchResults ? (
                <>
                  Results for
                  <span className="font-semibold"> {router.query.search} </span>
                  <span className=" italic">{searchResults.length} </span>
                  items
                </>
              ) : (
                <>
                  <span>not found</span>
                </>
              )}
            </small>
          </div>
          <div
            className={`grid ${
              selectedGrid == 2
                ? "grid-cols-2"
                : selectedGrid == 3
                ? "grid-cols-3"
                : selectedGrid == 4
                ? "grid-cols-4"
                : selectedGrid == 5
                ? "grid-cols-5"
                : "grid-cols-1"
            } grid-cols-2 gap-6`}
          >
            {searchResults ? (
              searchResults.map((product) => (
                <span>
                  <Product
                    key={product.id}
                    id={product.id}
                    category={product.category.name}
                    img={product.image}
                    price={product.price}
                    title={product.name}
                  />
                </span>
              ))
            ) : (
              <span>loading ..</span>
            )}
          </div>
        </div>

        {/* END search results list */}

        {/* START pagination */}
        {/* END pagination */}
      </div>
      {/* END search results */}
    </section>
  );
};

export default Search;
