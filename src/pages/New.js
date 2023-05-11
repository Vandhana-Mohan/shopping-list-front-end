import GroceryNewForm from "../components/GroceryNewForm";

function New() {
  return (
    <div className="flex items-center justify-center">
      <div className="p-6 m-6 rounded-lg shadow-green-500/50 border shadow-lg">
        <h1 className="text-4xl font-bold">Add items . . . </h1>
        <GroceryNewForm />
      </div>
    </div>
  );
}
export default New;
