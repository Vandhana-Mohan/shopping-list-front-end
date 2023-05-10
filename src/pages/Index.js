import Groceries from "../components/Groceries";

function Index() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">View Items in Cart</h1>
      <Groceries />
    </div>
  );
}

export default Index;
