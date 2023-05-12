import Search from "./Search";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <nav className="bg-green-600 py-4 flex justify-around rounded shadow-green-500/50 shadow-xl">
      <ul className="flex justify-around">
        <li className="cursor-pointer hover:text-gray-300 text-2xl font-bold mb-6">
          <Link to="/" className="bg-transparent text-white py-2 px-4 rounded">
            Explore All
          </Link>
        </li>

        <li className="cursor-pointer hover:text-gray-300 mr-4 text-2xl font-bold mb-6">
          {" "}
          <Link
            to="/groceries/new"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            {" "}
            Add New
          </Link>{" "}
        </li>

        <li
          className={`cursor-pointer text-white hover:text-gray-300 text-2xl font-bold mb-6 ${
            dropdownOpen ? "active" : ""
          }`}
          onClick={toggleDropdown}
        >
          Categories
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>Filter by Dairy</li>
              <li>Filter by Fruits</li>
              <li>Filter by Vegetables</li>
            </ul>
          )}
        </li>
      </ul>
      <Search />
    </nav>
  );
}
export default Navbar;
