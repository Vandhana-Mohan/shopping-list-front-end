import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  function handleInputChange(event) {
    setSearchInput(event.target.value);
  }
  function handleSearch() {
    navigate(`/search/${searchInput}`);
  }
  return (
    <div className="mt-4 flex items-center">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="text"
          className="relative flex-auto bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-bold leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-black-200 dark:focus:border-primary bg-white rounded-l-lg w-96 py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          placeholder="What can we help you find ?"
          aria-label="Search"
          aria-describedby="button-addon1"
          value={searchInput}
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
      </div>
    </div>
  );
}
export default Search;
