import SearchDetails from "../components/SearchDetails";

function ShowSearch() {
  return (
    <div className="items-center mx-auto px-4 py-10 justify-center mt-4">
      <div
        className="p-6 m-6 rounded-lg shadow-green-500/50 border shadow-md"
        style={{ paddingBottom: "10rem" }}
      >
        <SearchDetails />
      </div>
    </div>
  );
}

export default ShowSearch;
