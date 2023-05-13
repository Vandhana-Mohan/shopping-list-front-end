import Search from "./Search";
import { Link } from "react-router-dom";
import FilterCategory from "./FilterCategory";

function Navbar() {
  return (
    <nav className="bg-green-600 flex justify-around rounded shadow-green-500/50 shadow-xl">
      <ul className="flex mt-4 justify-around">
        <li className="cursor-pointer hover:text-gray-300 text-2xl font-bold mb-6">
          <Link to="/" className="bg-transparent text-white py-2 px-4 rounded">
            Explore All
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300 mr-4 text-2xl font-bold mb-6">
          <Link
            to="/groceries/new"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            Add New Item
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300 mr-4 text-2xl font-bold mb-6">
          <Link
            to="/groceries/categories"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            Categories
          </Link>
        </li>
        {/* <FilterCategory /> */}
      </ul>
      <Search />
    </nav>
  );
}

export default Navbar;
