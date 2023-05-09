import Cart_Logo from "../assets/Cart_Logo.png";
import { Link } from "react-router-dom";

function Header({ isDarkMode }) {
  return (
    <header
      className={"flex m-1 p-4 " + (isDarkMode ? "text-white" : "text-black")}
      style={{ backgroundColor: isDarkMode ? "#1f2937" : "#85BB65" }}
    >
      <Link to="/">
        <img src={Cart_Logo} alt="Shop_Logo" className="w-20 h-20" />
      </Link>

      <Link to="/">
        <h1 className="m-6 text-4xl font-bold text-orange-600"> FreshPick</h1>
      </Link>
    </header>
  );
}

export default Header;
