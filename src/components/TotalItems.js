import { useState, useEffect } from "react";
function TotalItems() {
  const [totalItems, setTotalItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/groceries`)
      .then((res) => res.json())
      .then((data) => {
        setTotalItems(data);
        setTotal(data.length); // Count the total number of items
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="mt-4 flex items-center bg-transparent text-white py-2 px-4 rounded text-xl font-bold mb-6">
      <h1 className="flex-1 text-xl font-bold mb-2 whitespace-nowrap">
        Total Items in Store: {total}
      </h1>
    </div>
  );
}
export default TotalItems;
