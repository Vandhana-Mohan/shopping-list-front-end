import GroceryDetails from "../components/GroceryDetails";

function Show() {
  return (
    <div className="flex flex-col p-6 m-6 rounded-lg items-center justify-center shadow-green-500/50 border shadow-md">
      <h1 className="text-4xl font-bold mb-6">View Details . . .</h1>
      <GroceryDetails />
    </div>
  );
}

export default Show;
