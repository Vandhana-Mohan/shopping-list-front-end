import GroceryNewForm from "../components/GroceryNewForm";

function New() {
  return (
    <div className="shadow-lg rounded-lg items-center p-6 m-6 justify-center bg-pink-50">
      <h1 className="text-4xl font-bold mb-6">Add items to your cart ... </h1>
      <GroceryNewForm />
    </div>
  );
}

export default New;
