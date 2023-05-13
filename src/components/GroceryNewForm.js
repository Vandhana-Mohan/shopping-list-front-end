import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function GroceryNewForm() {
  let navigate = useNavigate();

  const [newGrocery, setNewGrocery] = useState({
    name: "",
    category: "",
    image_url: "",
    description: "",
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

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/groceries`, newGrocery)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("2345", error);
        navigate("/not-found");
      });
  }

  function handleTextChange(event) {
    setNewGrocery({ ...newGrocery, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setNewGrocery({ ...newGrocery, is_organic: event.target.checked });
  }

  function handleUnitChange(event) {
    const { value } = event.target;
    setNewGrocery((prev) => ({ ...prev, unit: value }));
  }

  function handleCategoryChange(event) {
    const { value } = event.target;
    if (value === "addCategory") {
      const newCategory = prompt("Enter the name of the new category:");
      if (newCategory) {
        setCategories([...categories, newCategory]);
        setNewGrocery((prev) => ({
          ...prev,
          category: newCategory,
        }));
      }
    } else {
      setNewGrocery((prev) => ({
        ...prev,
        category: value,
      }));
    }
  }

  return (
    <div className="p-4" style={{ paddingBottom: "6rem" }}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-3/4">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name of the product: (Required)
          </label>
          <input
            id="name"
            type="text"
            required
            autoFocus
            placeholder="Enter the name of product:"
            title="Name of the Product is required"
            onChange={handleTextChange}
            value={newGrocery.name}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="category" className="mb-1 font-medium text-gray-700">
            Category : (Optional)
          </label>
          <select
            id="category"
            value={newGrocery.category}
            title="Choose category - optional"
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
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

        <div className="flex flex-col w-3/4">
          <label htmlFor="image_url" className="mb-1 font-medium text-gray-700">
            URL (Image) link of the product : (Optional)
          </label>
          <input
            id="image_url"
            type="text"
            onChange={handleTextChange}
            placeholder="Enter the URL link of product:"
            title="URL image link of the Product -- optional"
            value={newGrocery.image_url}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label
            htmlFor="description"
            className="mb-1 font-medium text-gray-700"
          >
            Description : (Optional)
          </label>
          <textarea
            id="description"
            rows="2"
            title="Description of the Product -- optional"
            placeholder="Enter a description for the product:"
            onChange={handleTextChange}
            value={newGrocery.description}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          ></textarea>
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="price" className="mb-1 font-medium text-gray-700">
            {" "}
            Price: (Required)
          </label>
          <input
            id="price"
            type="number"
            min="0"
            step="0.01"
            onChange={handleTextChange}
            value={newGrocery.price}
            placeholder="Enter price 0.00 - no $ sign needed"
            title="Price is required"
            required
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>
        <div className="flex flex-col w-3/4">
          <label htmlFor="quantity" className="mb-1 font-medium text-gray-700">
            Quantity: (Required)
          </label>
          <input
            id="quantity"
            type="number"
            min="0"
            step="0.01"
            onChange={handleTextChange}
            value={newGrocery.quantity}
            title="Quantity is required"
            placeholder="Enter the quantity: "
            required
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-3/4">
          <label htmlFor="unit" className="mb-1 font-medium text-gray-700">
            Unit: (Optional)
          </label>
          <select
            id="unit"
            onChange={handleUnitChange}
            title="Choose unit -- optional"
            value={newGrocery.unit}
            className="lg:w-3/4 py-2 px-3 rounded-md border relative bg-white  border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-600 focus:border-transparent"
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
            Organic (Optional - Default Non Organic)
          </label>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
          >
            Cancel
          </button>
          <button
            type="reset"
            className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
          >
            {" "}
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default GroceryNewForm;
