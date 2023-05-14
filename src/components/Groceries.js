import { useState, useEffect } from "react";
import Grocery from "./Grocery";
import FilterCategory from "./FilterCategory";

function Groceries({ category }) {
  const [grocery, setGrocery] = useState([]);
  const [filteredGrocery, setFilteredGrocery] = useState([]);

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

  useEffect(() => {
    if (category) {
      const filteredItems = grocery.filter(
        (item) => item.category === category
      );
      setFilteredGrocery(filteredItems);
    } else {
      setFilteredGrocery(grocery);
    }
  }, [category, grocery]);

  return (
    <div>
      {category ? (
        filteredGrocery.map((item) => (
          <FilterCategory key={item.id} grocery={item} />
        ))
      ) : (
        grocery.map((item) => (
          <Grocery key={item.id} grocery={item} />
        ))
      )}
    </div>
  );
}
  

  // return (
  //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rounded-lg shadow-green-500/50 border shadow-md">
  //     {filteredGrocery.map((item) => (
  //       <Grocery key={item.id} grocery={item} />
  //     ))}
  //   </div>
  // );


export default Groceries;
