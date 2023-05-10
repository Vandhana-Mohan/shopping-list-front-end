import { Link } from "react-router-dom";

function Grocery({ grocery }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={grocery.image_url}
        alt={grocery.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">Name : {grocery.name}</h2>
        <h2 className="text-lg">Category : {grocery.category}</h2>
        <h2 className="text-lg">Description : {grocery.description}</h2>
        <h2 className="text-lg">Price : {grocery.price}</h2>
        <h2 className="text-lg">Quantity : {grocery.quantity}</h2>
        <h2 className="text-lg">Unit : {grocery.unit}</h2>
        <h2 className="text-lg">
          {grocery.is_organic ? "Organic" : "Not Organic"}
        </h2>
        <Link
          to={`/groceries/${grocery.id}`}
          className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full mt-4 inline-block hover:bg-pink-700 transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
export default Grocery;
