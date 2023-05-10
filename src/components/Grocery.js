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
      <td className="border px-4 py-2">{grocery.category}</td>
      <td className="border px-4 py-2">{grocery.image_url}</td>
      <td className="border px-4 py-2">{grocery.description}</td>
      <td className="border px-4 py-2">{grocery.price}</td>
      <td className="border px-4 py-2">{grocery.quantity}</td>
      <td className="border px-4 py-2">{grocery.unit}</td>

      <td className="border px-4 py-2">
        {grocery.is_organic ? <span> ✅ </span> : <span> ❌ </span>}
      </td>
    </tr>
  );
}

export default Grocery;
