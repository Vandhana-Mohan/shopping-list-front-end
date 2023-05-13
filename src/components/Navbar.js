import Search from "./Search";
import { Link } from "react-router-dom";
import Cart_Logo from "../assets/Cart_Logo.png";

function Navbar() {
  return (
    <nav className="bg-green-900 flex flex-col sm:flex-row justify-around rounded shadow-green-500/50 shadow-xl">
      <Link to="/">
        <img
          src={Cart_Logo}
          alt="Shop_Logo"
          className="w-20 h-20 shadow-indigo-500/50 shadow-lg"
        />
      </Link>
      <ul className="flex flex-col sm:flex-row mt-6 justify-around">
        <li className="cursor-pointer hover:text-gray-300 text-xl font-bold mb-6">
          <Link to="/" className="bg-transparent text-white py-2 px-4 rounded">
            Explore All
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300 mr-4 text-xl font-bold mb-6">
          <Link
            to="/groceries/new"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            Add New Item
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300 mr-4 text-xl font-bold mb-6">
          <Link
            to="/groceries/categories"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            Categories
          </Link>
        </li>
      </ul>
      <Search />
    </nav>
  );
}

export default Navbar;
