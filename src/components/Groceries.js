import { useState, useEffect } from "react";
import Grocery from "./Grocery";

function Groceries() {
  const [grocery, setGrocery] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/groceries`)
      .then((response) => response.json())
      .then((data) => {
        setGrocery(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table className="table-auto w-full bg-pink-200">
        <thead>
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Image</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Unit</th>
            <th className="px-4 py-2">Organic</th>
          </tr>
        </thead>
        <tbody>
          {grocery
            ? grocery.map((item) => {
                return <Grocery key={item.id} grocery={item} />;
              })
            : null}
        </tbody>
      </table>
    </div>
  );
}

export default Groceries;
