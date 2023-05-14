// import React, { useState, useEffect } from "react";
// import Grocery from "./Grocery";

// function FilterCategory() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [allProducts, setAllProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const categories = [
//     "Fruits",
//     "Vegetables",
//     "Bakery",
//     "Meat",
//     "Dairy",
//     "Canned goods",
//     "Beverages",
//     "Snacks",
//     "Frozen foods",
//     "Grains",
//     "Condiments",
//     "Baking supplies",
//     "Household items",
//   ];

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}/groceries`)
//       .then((response) => response.json())
//       .then((data) => {
//         setAllProducts(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleCategorySelect = (category) => {
//     setSelectedCategory(category);
//     toggleDropdown();
//   };

//   useEffect(() => {
//     if (selectedCategory) {
//       const filtered = allProducts.filter(
//         (product) => product.category === selectedCategory
//       );
//       setFilteredProducts(filtered);
//     } else {
//       setFilteredProducts(allProducts);
//     }
//   }, [selectedCategory, allProducts]);

//   return (
//     <li
//       className={`relative inline-block text-white hover:text-gray-300 text-2xl font-bold mb-6 ${
//         dropdownOpen ? "active" : ""
//       }`}
//       onClick={toggleDropdown}
//     >
//       <span className="flex items-center">
//         Categories
//         {dropdownOpen && (
//           <svg
//             className="ml-2 mt-1 w-3 h-3 text-white transform rotate-45 transition-transform duration-200"
//             viewBox="0 0 8 8"
//             fill="currentColor"
//           >
//             <path d="M0 0h8v8H0z" />
//           </svg>
//         )}
//       </span>
//       {dropdownOpen && (
//         <ul className="dropdown-menu absolute left-0 w-60 bg-white rounded shadow-md mt-2">
//           {categories.map((category) => (
//             <li
//               key={category}
//               className="py-2 px-4 hover:bg-white-100 cursor-pointer"
//               onClick={() => handleCategorySelect(category)}
//             >
//               Filter by {category}
//             </li>
//           ))}
//         </ul>
//       )}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-green-500/50 border shadow-md">
//         {filteredProducts.map((product) => (
//           <Grocery key={product.id} grocery={product} />
//         ))}
//       </div>
//     </li>
//   );
// }
// export default FilterCategory;

///groceries/categories/category

function FilterCategory({ grocery }) {
  console.log("fgnew", grocery)
  return (
    <div>
      <h2> hi {grocery.name} </h2>
    </div>
  )
}

// .food {
//   border-radius: 30px;
//   box-shadow: -10px 10px 10px 0px #000, -10px 0px 10px 0px #00f;
//   margin-top: 20px;
// }

/*
import { Link } from "react-router-dom";

function FilterCategory({ grocery }) {
  console.log("Filter-grocery-new-save", grocery, grocery.id, grocery.name);
  return (
    <Link
      to={`/groceries/categories/category`} 
      className="rounded-lg shadow-green-500/50 shadow-md transition-colors duration-300"
    >
      <div
        key={grocery.id}
        className="rounded-lg shadow-green-500/50 border shadow-md overflow-hidden"
      >
        <Link
          to={`/groceries/${grocery.id}`}
          className="py-2 px-4 rounded-lg shadow-green-500/50 shadow-md w-max transition-colors duration-300"
        >
          {grocery.image_url ? (
            <img
              src={grocery.image_url}
              alt={grocery.name}
              className="w-full h-60 object-cover"
            />
          ) : (
            <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500 font-bold text-xl">
                No Image Available
              </p>
            </div>
          )}
        </Link>
        <div className="p-4 text-center">
          <Link
            to={`/groceries/${grocery.id}`}
            className="text-blue-500 hover:underline"
          >
            <h2 className="text-2xl font-bold mb-2">
              {grocery.name
                .split(" ")
                .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
                .join(" ")}
            </h2>
          </Link>

          <p className="text-lg mb-2">
            {grocery.description
              ? grocery.description.charAt(0).toUpperCase() +
                grocery.description.slice(1)
              : "Description : Not Available"}
          </p>

          <div className="flex flex-wrap mb-4 justify-center">
            <p className="text-gray-600 text-base mr-2">Category:</p>
            <p className="text-lg">
              {grocery.category
                ? grocery.category.charAt(0).toUpperCase() +
                  grocery.category.slice(1)
                : "Not Available"}
            </p>
          </div>

          <div className="flex flex-wrap mb-4 justify-center">
            <p className="text-gray-600 text-base mr-2">Price:</p>
            <p className="text-lg">{grocery.price} USD</p>
          </div>
          <div className="flex flex-wrap mb-4 justify-center">
            <p className="text-gray-600 text-base mr-2">Quantity:</p>
            <p className="text-lg">
              {grocery.quantity} {grocery.unit}
            </p>
          </div>

          <div className="flex flex-wrap mb-4 justify-center">
            <p className="text-gray-600 text-base mr-2">Organic:</p>
            <p className="text-lg">{grocery.is_organic ? "Yes" : "No"}</p>
          </div>
          <div className="flex flex-wrap mb-4 justify-center">
            <Link
              to={`/groceries/${grocery.id}`}
              className="py-2 px-4 mt-6 bg-green-300 hover:bg-green-100 text-xl font-bold flex focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 shadow-md w-max transition-colors duration-300 text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
*/
export default FilterCategory;
