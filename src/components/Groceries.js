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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-6 p-6">
      {grocery.map((item) => (
        <Grocery key={item.id} grocery={item} />
      ))}
    </div>
  );
}

export default Groceries;
