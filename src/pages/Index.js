import Groceries from "../components/Groceries";

function Index() {
  return (
    <div className="flex flex-col items-center m-6 p-6 justify-center rounded-lg shadow-green-500/50 border shadow-md">
      <h2 className="text-2xl font-bold mb-6">View All Items </h2>
      <Groceries />
    </div>
  );
}

export default Index;
