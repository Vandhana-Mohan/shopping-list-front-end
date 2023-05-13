import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Reviews from "./Reviews";

function GroceryDetails() {
  let { id } = useParams();

  let navigate = useNavigate();

  const [showItem, setShowItem] = useState({
    name: "",
    category: "",
    image_url: "",
    description: "",
    price: "",
    quantity: "",
    unit: "",
    is_organic: false,
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/groceries/${id}`)
        .then((response) => {
          setShowItem(response.data);
        })
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });
    } 
  }, [id, navigate]);

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this item ? ")) {
      fetch(`${process.env.REACT_APP_API_URL}/groceries/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
          navigate("/not-found");
        });
    }
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col space-y-4 p-6 m-6">
          <h2 className="text-2xl font-bold mb-2">
            <strong>Name:</strong>{" "}
            {showItem.name
              .split(" ")
              .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>

          <div className="flex items-center space-x-2">
            <h3 className="text-lg mb-2">
              <strong>Product Description:</strong>
            </h3>
            <p className="text-lg mb-2">
              {showItem.description
                ? showItem.description.charAt(0).toUpperCase() +
                  showItem.description.slice(1)
                : "Not Available"}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <h3 className="text-lg mb-2">
              <strong>Category:</strong>
            </h3>
            <p className="text-lg mb-2">
              {showItem.category
                ? showItem.category.charAt(0).toUpperCase() +
                  showItem.category.slice(1)
                : "Not Available"}
            </p>
          </div>

          <h3 className="text-lg mb-2">
            <strong>Price:</strong> {showItem.price} USD
          </h3>
          <h3 className="text-lg mb-2">
            <strong>Product Quantity:</strong> {showItem.quantity}
          </h3>
          <h3 className="text-lg mb-2">
            <strong>Unit:</strong>{" "}
            {showItem.unit ? showItem.unit : "Not Available"}
          </h3>
          {showItem.is_organic ? (
            <h3 className="text-lg mb-2">
              <strong>Organic</strong>
            </h3>
          ) : (
            <h3 className="text-lg mb-2">
              <strong>Not Organic</strong>
            </h3>
          )}
        </div>
        {/* <Reviews /> */}
        <div className="flex justify-end space-x-4">
          <button className="bg-green-300 hover:bg-green-100 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-green-500/50 border shadow-md">
            <Link to="/">Back</Link>
          </button>
          <button className="bg-green-300 hover:bg-green-100 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-green-500/50 border shadow-md">
            <Link to={`/groceries/${id}/edit`}>Edit</Link>
          </button>
          <button
            className="bg-green-300 hover:bg-green-100 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline shadow-green-500/50 border shadow-md"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>

      <div className="p-6 m-6 rounded-lg shadow-green-500/50 border shadow-lg relative flex justify-center">
        {showItem.image_url ? (
          <div>
            <img
              className="w-full h-auto object-cover max-w-max max-h-full"
              src={showItem.image_url}
              alt={showItem.name}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-75 transition duration-300">
                <img
                  className="w-full h-full object-contain hover:scale-150 transition duration-300"
                  src={showItem.image_url}
                  alt={showItem.name}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-96 h-96 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 font-bold text-xl text-center">
              No Image Available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GroceryDetails;
