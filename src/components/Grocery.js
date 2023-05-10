import { Link } from "react-router-dom";

function Grocery({ grocery }) {
  return (
    <tr>
      <td className="border px-4 py-2">{grocery.id}</td>
      <td className="border px-4 py-2">
        <Link
          to={`/groceries/${grocery.id}`}
          className="text-blue-500 hover:underline"
        >
          {grocery.name}
        </Link>
      </td>
      <td className="border px-4 py-2">{grocery.artist}</td>
      <td className="border px-4 py-2">{grocery.album}</td>
      <td className="border px-4 py-2">{grocery.time}</td>
      <td className="border px-4 py-2">
        {grocery.is_organic ? <span> ⭐️ </span> : <span> &nbsp;&nbsp; </span>}
      </td>
    </tr>
  );
}

export default Grocery;
