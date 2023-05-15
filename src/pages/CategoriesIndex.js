import Categories from "../components/Categories";

function CategoriesIndex() {
  return (
    <div
      className="flex flex-col m-6 p-6 rounded-lg shadow-green-500/50 border shadow-md"
      style={{ paddingBottom: "10rem" }}
    >
      {/* <h2 className="text-2xl font-bold mb-6">View All Items </h2> */}
      <Categories />
    </div>
  );
}

export default CategoriesIndex;
