import { Link } from "react-router-dom";

// {`/search/${item.id}`} >
function SearchResult({ search }) {
  return (
    <div
      key={search.id}
      className="rounded-lg shadow-green-500/50 border shadow-md overflow-hidden"
    >
      <Link
        to={`/groceries/${search.id}`}
        className="py-2 px-4 rounded-lg shadow-green-500/50 shadow-md w-max transition-colors duration-300"
      >
        {search.image_url ? (
          <img
            src={search.image_url}
            alt={search.name}
            className="w-full h-60 object-cover"
          />
        ) : (
          <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500 font-bold text-xl">
              No Image Available
            </p>
          </div>
        )}
      </Link>
      <div className="p-4 text-center">
        <Link
          to={`/groceries/${search.id}`}
          className="text-blue-500 hover:underline"
        >
          <h2 className="text-2xl font-bold mb-2">
            {search.name
              .split(" ")
              .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>
        </Link>

        <p className="text-lg mb-2">
          {search.description
            ? search.description.charAt(0).toUpperCase() +
              search.description.slice(1)
            : "Description : Not Available"}
        </p>

        <div className="flex flex-wrap mb-4 justify-center">
          <p className="text-gray-600 text-base mr-2">Category:</p>
          <p className="text-lg">
            {search.category
              ? search.category.charAt(0).toUpperCase() +
                search.category.slice(1)
              : "Not Available"}
          </p>
        </div>

        <div className="flex flex-wrap mb-4 justify-center">
          <p className="text-gray-600 text-base mr-2">Price:</p>
          <p className="text-lg">{search.price} USD</p>
        </div>
        <div className="flex flex-wrap mb-4 justify-center">
          <p className="text-gray-600 text-base mr-2">Quantity:</p>
          <p className="text-lg">
            {search.quantity} {search.unit}
          </p>
        </div>

        <div className="flex flex-wrap mb-4 justify-center">
          <p className="text-gray-600 text-base mr-2">Organic:</p>
          <p className="text-lg">{search.is_organic ? "Yes" : "No"}</p>
        </div>
        <div className="flex flex-wrap mb-4 justify-center">
          <Link
            to={`/groceries/${search.id}`}
            className="py-2 px-4 mt-6 bg-green-300 hover:bg-green-100 text-xl font-bold flex focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 shadow-md w-max transition-colors duration-300 text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
