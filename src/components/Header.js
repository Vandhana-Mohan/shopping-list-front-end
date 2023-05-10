import Cart_Logo from "../assets/Cart_Logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex m-1 p-4">
      <Link to="/">
        <img src={Cart_Logo} alt="Shop_Logo" className="w-20 h-20" />
      </Link>

      <Link to="/">
        <h1 className="m-6 text-4xl font-bold text-orange-600"> FreshPick</h1>
      </Link>

      <div className="ml-auto text-center">
        <i className="fa fa-user fa-3x animate-bounce mb-2"></i>
        <div>Manager</div>
      </div>
    </header>
  );
}

export default Header;
