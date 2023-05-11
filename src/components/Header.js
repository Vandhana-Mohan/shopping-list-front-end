import Cart_Logo from "../assets/Cart_Logo.png";
import { Link } from "react-router-dom";

function Header() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return (
    <header className="bg-green-300 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img src={Cart_Logo} alt="Shop_Logo" className="w-20 h-20" />
        </Link>
        <Link to="/">
          <h1 className="text-yellow-900 ml-2 text-2xl font-bold"> FreshPick</h1>
        </Link>
      </div>

      <h2 className="text-white text-2xl font-bold">
        {greeting} Manager, FreshPick welcomes you
      </h2>

      <div className="flex items-center">
        <i className="fa fa-user fa-3x animate-bounce mb-2 mr-2 text-green"></i>
        <div className="text-white text-xl">Manager</div>
      </div>
    </header>
  );
}

export default Header;
