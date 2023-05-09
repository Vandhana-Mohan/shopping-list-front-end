import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-pink-200 py-4 flex justify-around">
      <h1 className="text-4xl font-bold mb-6">
        <Link to="/">Get your Cart Ready </Link>
      </h1>
      <ul className="flex justify-around">
        <li className="cursor-pointer hover:text-gray-300 mr-4">
          {" "}
          <Link
            to="/groceries/new"
            className="bg-pink-400 text-white py-2 px-4 rounded"
          >
            {" "}
            Add new item to cart
          </Link>{" "}
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link
            to="/groceries"
            className="bg-pink-400 text-white py-2 px-4 rounded"
          >
            View Cart
          </Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          Number of items in cart{" "}
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          {" "}
          Total price of cart{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
