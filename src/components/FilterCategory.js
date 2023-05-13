import React, { useState, useEffect } from "react";
import Grocery from "./Grocery";

function FilterCategory() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const categories = [
    "Fruits",
    "Vegetables",
    "Bakery",
    "Meat",
    "Dairy",
    "Canned goods",
    "Beverages",
    "Snacks",
    "Frozen foods",
    "Grains",
    "Condiments",
    "Baking supplies",
    "Household items",
  ];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/groceries`)
      .then((response) => response.json())
      .then((data) => {
        setAllProducts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    toggleDropdown();
  };

  useEffect(() => {
    if (selectedCategory) {
      const filtered = allProducts.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(allProducts);
    }
  }, [selectedCategory, allProducts]);

  return (
    <li
      className={`relative inline-block text-white hover:text-gray-300 text-2xl font-bold mb-6 ${
        dropdownOpen ? "active" : ""
      }`}
      onClick={toggleDropdown}
    >
      <span className="flex items-center">
        Categories
        {dropdownOpen && (
          <svg
            className="ml-2 mt-1 w-3 h-3 text-white transform rotate-45 transition-transform duration-200"
            viewBox="0 0 8 8"
            fill="currentColor"
          >
            <path d="M0 0h8v8H0z" />
          </svg>
        )}
      </span>
      {dropdownOpen && (
        <ul className="dropdown-menu absolute left-0 w-60 bg-white rounded shadow-md mt-2">
          {categories.map((category) => (
            <li
              key={category}
              className="py-2 px-4 hover:bg-white-100 cursor-pointer"
              onClick={() => handleCategorySelect(category)}
            >
              Filter by {category}
            </li>
          ))}
        </ul>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-green-500/50 border shadow-md">
        {filteredProducts.map((product) => (
          <Grocery key={product.id} grocery={product} />
        ))}
      </div>
    </li>
  );
}
export default FilterCategory;
