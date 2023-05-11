import { Link } from "react-router-dom";

function Grocery({ grocery }) {
  return (
    <div
      key={grocery.id}
      className="rounded-lg shadow-green-500/50 border shadow-md overflow-hidden"
    >
      <img
        src={grocery.image_url}
        alt={grocery.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{grocery.name}</h2>
        <p className="text-lg mb-2">{grocery.description}</p>
        <div className="flex flex-wrap mb-4">
          <p className="text-gray-600 text-base mr-2">Category:</p>
          <p className="text-lg">{grocery.category}</p>
        </div>
        <div className="flex flex-wrap mb-4">
          <p className="text-gray-600 text-base mr-2">Price:</p>
          <p className="text-lg">{grocery.price} USD</p>
        </div>
        <div className="flex flex-wrap mb-4">
          <p className="text-gray-600 text-base mr-2">Quantity:</p>
          <p className="text-lg">
            {grocery.quantity} {grocery.unit}
          </p>
        </div>

        <div className="flex flex-wrap mb-4">
          <p className="text-gray-600 text-base mr-2">Organic:</p>
          <p className="text-lg">{grocery.is_organic ? "Yes" : "No"}</p>
        </div>

        <Link
          to={`/groceries/${grocery.id}`}
          className="py-2 px-4 mt-6 bg-green-300 hover:bg-green-100 text-xl font-bold flex focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 shadow-md w-max transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
export default Grocery;
