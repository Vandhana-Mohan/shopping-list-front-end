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
    <header className="bg-green-300 p-1 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <img src={Cart_Logo} alt="Shop_Logo" className="w-20 h-20 shadow-indigo-500/50 shadow-lg" />
        </Link>
        <Link to="/">
          <h1
            className="text-indigo-600 tracking-wider ml-2 text-5xl font-bold"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Fresh-Picks
          </h1>
        </Link>
      </div>

      <h2 className="text-indigo-600 text-2xl font-bold">
        {greeting} Manager, Fresh-Picks welcomes you
      </h2>

      <div className="flex items-center">
        <i className="fa fa-user fa-3x animate-bounce mb-2 mr-2 text-green"></i>
        <div className="text-indigo-600 text-xl">Manager</div>
      </div>
    </header>
  );
}

export default Header;
