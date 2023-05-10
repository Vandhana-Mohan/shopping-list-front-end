import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-green-600 py-4 flex justify-around rounded shadow-green-500/50 shadow-xl">
      <ul className="flex justify-around">
        <li className="cursor-pointer hover:text-gray-300 mr-4">
          {" "}
          <Link
            to="/groceries/new"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            {" "}
            Add new item
          </Link>{" "}
        </li>

        <li className="cursor-pointer hover:text-gray-300">
          <Link
            to="/"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            View Cart
          </Link>
        </li>

        <li className="cursor-pointer hover:text-gray-300">
          <Link
            to="/groceries"
            className="bg-transparent text-white py-2 px-4 rounded"
          >
            Categories
          </Link>
        </li>

        <li className="cursor-pointer hover:text-gray-300 bg-transparent text-white py-2 px-4 rounded">
          Number of items in store{" "}
        </li>
        <li className="cursor-pointer hover:text-gray-300 bg-transparent text-white py-2 px-4 rounded">
          {" "}
          Total price{" "}
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
