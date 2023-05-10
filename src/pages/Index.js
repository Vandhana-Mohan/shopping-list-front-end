import Groceries from "../components/Groceries";

function Index() {
  return (
    <div className="flex flex-col items-center m-6 p-6 justify-center bg-pink-50">
      <h1 className="text-4xl font-bold mb-6">View All Items in Cart</h1>
      <Groceries />
    </div>
  );
}

export default Index;
