import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchResult from "./SearchResult";

function Search() {
  const [query, setQuery] = useState("");
  const [grocery, setGrocery] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (query) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/groceries`)
        .then((response) => {
          const grocery = response.data;
          const filteredGrocery = grocery.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
          );
          setGrocery(filteredGrocery);
        })
        .catch((error) => console.log(error));
    } else {
      setGrocery([]);
    }
    setClicked(false);
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    setClicked(false);
  };

  const handleSearch = () => {
    setQuery("");
    setGrocery([]);
    setClicked(true);
  };

  return (
    <div className="mt-4 flex items-center">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative flex-auto bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-bold leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-black-200 dark:focus:border-primary bg-white rounded-l-lg w-96 py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          placeholder="What can we help you find ?"
          aria-label="Search"
          aria-describedby="button-addon1"
          value={query}
          onChange={handleInputChange}
        />

        <button
          className="relative z-[2] flex items-center rounded-r bg-white px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-green-900 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg absolute top-0 right-0 h-full text-center"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={handleSearch}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#000000"
            className="h-6 w-6 mx-auto my-auto"
            stroke="#000000"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
            />
          </svg>
        </button>

        <div>
          {grocery.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-green-500/50 border shadow-md">
              {grocery.map((item) => (
                <SearchResult key={item.id} search={item} />
              ))}
            </div>
          ) : (
            <div className="text-2xl text-white font-bold mb-6">
              {query && !clicked ? "This item does not exist." : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Search;
