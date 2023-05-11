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
    axios
      .get(`${process.env.REACT_APP_API_URL}/groceries/${id}`)
      .then((response) => {
        setShowItem(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
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
    <div
      className="container mx-auto px-4 py-8"
      style={{ paddingBottom: "10rem" }}
    >
      <div className="border border-red-50 shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 my-4">
          <h2 className="text-lg leading-6 font-medium text-gray-900 my-4">
            <strong>Name of the item : </strong>
            {showItem.name}
          </h2>

          <h2 className="text-lg leading-6 font-medium text-gray-900 my-4">
            <strong>Category : </strong>
            {showItem.category}
          </h2>

          <img
            className="w-full h-60 object-cover"
            src={showItem.image_url}
            alt={showItem.name}
          />

          <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
            <strong>Product Description : </strong>
            {showItem.description}
          </h3>

          <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
            <strong>Price : </strong>
            {showItem.price}
          </h3>
          <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
            <strong>Product Quantity : </strong>
            {showItem.quantity}
          </h3>
          <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
            <strong>Unit : </strong>
            {showItem.unit}
          </h3>

          {showItem.is_organic ? (
            <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
              <strong>Organic </strong>
            </h3>
          ) : (
            <h3 className="mt-1 max-w-2xl text-sm text-gray-900 my-4">
              <strong>Not Organic</strong>
            </h3>
          )}
        </div>

        {/* <Reviews /> */}
        
        <div className="px-4 py-3 sm:px-6">
          <div className="flex justify-center">
            <button className="mr-6 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Link to="/">Back</Link>
            </button>
            <button className="mr-6 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Link to={`/groceries/${id}/edit`}>Edit</Link>
            </button>
            <button
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-pink-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GroceryDetails;
