import GroceryDetails from "../components/GroceryDetails";

function Show() {
  return (
    <div className="p-6 m-6 rounded-lg items-center justify-center shadow-green-500/50 border shadow-md" style={{ paddingBottom: "10rem" }}>
      <h1 className="text-4xl text-center font-bold mb-6">View Details . . .</h1>
      <GroceryDetails />
      {/* </div> */}
    </div>
  );
}

export default Show;
