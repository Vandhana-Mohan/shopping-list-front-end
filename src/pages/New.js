import GroceryNewForm from "../components/GroceryNewForm";

function New() {
  return (
    <div className="items-center mx-auto px-4 py-10 justify-center mt-4">
      <div className="p-6 m-6 rounded-lg shadow-green-500/50 border shadow-lg">
        <h1 className="text-4xl font-bold">Add items . . . </h1>
        <GroceryNewForm />
      </div>
    </div>
  );
}
export default New;
