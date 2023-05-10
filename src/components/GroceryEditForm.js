import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function GroceryEditForm() {
  let { index } = useParams();
  let navigate = useNavigate();

  const [editGrocery, setEditGrocery] = useState({
    name: "",
    category: "",
    imageURL: "",
    price: "",
    quantity: "",
    unit: "",
    is_organic: false,
  });

  const unitOptions = [
    "lbs",
    "oz",
    "g",
    "kg",
    "pt",
    "qt",
    "gal",
    "doz",
    "pack",
  ];

  const [categories, setCategories] = useState([
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
  ]);

  function handleTextChange(event) {
    setEditGrocery({ ...editGrocery, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setEditGrocery({ ...editGrocery, is_organic: event.target.checked });
  }

  function handleUnitChange(event) {
    const { value } = event.target;
    setEditGrocery((prev) => ({ ...prev, unit: value }));
  }

  function handleCategoryChange(event) {
    const { value } = event.target;
    if (value === "addCategory") {
      const newCategory = prompt("Enter the name of the new category:");
      if (newCategory) {
        setCategories([...categories, newCategory]);
        setEditGrocery((prev) => ({
          ...prev,
          category: newCategory,
        }));
      }
    } else {
      setEditGrocery((prev) => ({
        ...prev,
        category: value,
      }));
    }
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/groceries/${index}`)
      .then((res) => res.json())
      .then((data) => {
        setEditGrocery(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/groceries/${index}`, editGrocery)
      .then(() => {
        navigate(`/groceries/${index}`);
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  }

  return (
    <div className="p-4" style={{ paddingBottom: "12rem" }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-1/2">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name of the product:
          </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter the name of product:"
            title="Name of the Product is required"
            onChange={handleTextChange}
            value={editGrocery.name}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="category" className="mb-1 font-medium text-gray-700">
            Category :
          </label>
          <select
            id="category"
            value={editGrocery.category}
            title="Choose category - optional"
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          >
            <option value="">-- Choose a category --</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
            <option value="addCategory">Add new category</option>
          </select>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="imageURL" className="mb-1 font-medium text-gray-700">
            URL (Image) link of the product :
          </label>
          <input
            id="imageURL"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={editGrocery.imageURL}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="price" className="mb-1 font-medium text-gray-700">
            {" "}
            Price:
          </label>
          <input
            id="price"
            type="number"
            min="0"
            step="0.99"
            onChange={handleTextChange}
            value={editGrocery.price}
            placeholder="Enter price 0.00 - no $ sign needed"
            title="Price is required"
            required
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="quantity" className="mb-1 font-medium text-gray-700">
            Quantity:
          </label>
          <input
            id="quantity"
            type="number"
            min="0"
            onChange={handleTextChange}
            value={editGrocery.quantity}
            title="Quantity is required"
            placeholder="Enter the quantity: "
            required
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="unit" className="mb-1 font-medium text-gray-700">
            Unit:
          </label>
          <select
            id="unit"
            onChange={handleUnitChange}
            title="Choose unit -- optional"
            value={editGrocery.unit}
            className="lg:w-full py-2 px-3 rounded-md border relative bg-white  border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">-- Choose a unit --</option>
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <input
            id="is_organic"
            type="checkbox"
            title="Check if the product is organic -- optional"
            onChange={handleCheckboxChange}
            className="rounded text-primary-600 mr-2"
          />
          <label
            htmlFor="is_organic"
            className="mb-1 font-medium text-gray-700"
          >
            Organic
          </label>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="px-4 py-2 mt-4 text-white bg-pink-400 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/groceries")}
            className="px-4 py-2 mt-4 text-white bg-pink-400 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="reset"
            className="px-4 py-2 mt-4 text-white bg-pink-400 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            {" "}
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default GroceryEditForm;
