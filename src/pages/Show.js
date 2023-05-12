import GroceryDetails from "../components/GroceryDetails";

function Show() {
  return (
    <div
      className="p-6 m-6 rounded-lg items-center justify-center shadow-green-500/50 border shadow-md"
      style={{ paddingBottom: "10rem" }}
    >
      <GroceryDetails />
    </div>
  );
}

export default Show;
