import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


function GroceryEditForm() {
  let { index } = useParams();
  let navigate = useNavigate();

  const [editGrocery, setEditGrocery] = useState({
    name: "",
    category: "",
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

  function handleCategoryChange(event) {
    const { value } = event.target;
    if (value === "addCategory") {
      const newCategory = prompt("Enter the name of the new category:");
      if (newCategory) {
        setCategories([...categories, newCategory]);
        setEditBudget((prevBudget) => ({
          ...prevBudget,
          category: newCategory,
        }));
      }
    } else {
      setEditBudget((prevBudget) => ({
        ...prevBudget,
        category: value,
      }));
    }
  }

  const handleTextChange = (event) => {
    setEditBudget({ ...editbudget, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setEditBudget({ ...editbudget, isWithdrawal: event.target.checked });
  };

  function handleDateChange(event) {
    const { value } = event.target;
    setEditBudget((prevBudget) => ({
      ...prevBudget,
      date: value,
    }));
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/budgets/${index}`)
      .then((res) => res.json())
      .then((data) => {
        setEditBudget(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/budgets/${index}`, editbudget)
      .then(() => navigate(`/budgets/${index}`));
  };

  return (
    <div className="p-4" style={{ paddingBottom: "20rem" }}>
      <h1 className="text-2xl font-bold mb-4"> Edit a new item </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-1/2">
          <label htmlFor="date" className="mb-2 text-lg font-medium">
            Date
          </label>
          <input
            id="date"
            value={editbudget.date}
            type="date"
            onChange={handleDateChange}
            required
            placeholder="Enter in mm-dd-yyyy format"
            pattern="(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(19|20)[0-9]{2}"
            className="py-2 px-3 border border-gray-300 rounded-md"
            title="Please match valid format mm-dd-yyyy"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="withdrawal" className="flex items-center">
            <span className="mr-2">Withdrawal</span>
            <input
              id="withdrawal"
              type="checkbox"
              onChange={handleCheckboxChange}
              className="mr-2"
              checked={editbudget.isWithdrawal}
            />
          </label>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="item_name" className="mb-2 text-lg font-medium">
            Name
          </label>
          <input
            id="item_name"
            type="text"
            required
            value={editbudget.item_name}
            placeholder="Enter the name of item"
            onChange={handleTextChange}
            className="py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="amount" className="mb-2 text-lg font-medium">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            required
            value={editbudget.amount}
            onChange={handleTextChange}
            className="py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="from" className="mb-2 text-lg font-medium">
            From
          </label>
          <input
            id="from"
            type="text"
            value={editbudget.from}
            placeholder="Please enter the source or recipient of this income/spending"
            onChange={handleTextChange}
            className="py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={editbudget.category}
            onChange={handleCategoryChange}
            className="py-2 px-3 border border-gray-300 rounded-md mt-1 block w-full"
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
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600"
          >
            Edit Item
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600"
          >
            Cancel
          </button>
          <button className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600">
            <Link to="/budgets">Back</Link>
          </button>
        </div>
      </form>
    </div>
  );
}
// --------------


  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/groceries`, newGrocery)
      .then(() => {
        navigate("/groceries");
      })
      .catch((error) => {
        console.log(error);
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
            value={newGrocery.name}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="category" className="mb-1 font-medium text-gray-700">
            Category :
          </label>
          <select
            id="category"
            value={newGrocery.category}
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
          <label
            htmlFor="description"
            className="mb-1 font-medium text-gray-700"
          >
            Description :
          </label>
          <textarea
            id="description"
            rows="2"
            title="Description of the Product -- optional"
            placeholder="Enter a description for the product:"
            onChange={handleTextChange}
            value={newGrocery.description}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-full"
          ></textarea>
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
            value={newGrocery.price}
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
            value={newGrocery.quantity}
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
            value={newGrocery.unit}
            className="lg:w-full py-2 px-3 rounded-md border relative bg-white  border-gray-300 bg-white text-gray-900 shadow-sm focus:outline-none focus:ring focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">Select Unit</option>
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
