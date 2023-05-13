
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
    <header className="bg-green-100 p-1 flex flex-col sm:flex-row items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <h1
            className="text-indigo-600 tracking-wider ml-2 text-3xl sm:text-5xl font-bold"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Fresh-Picks
          </h1>
        </Link>
      </div>
  
      <h5 className="text-indigo-600 text-lg sm:text-xl font-bold text-center sm:text-left">
        {greeting} Manager, Fresh-Picks welcomes you
      </h5>
  
      <div className="flex items-center">
        <i className="fa fa-user fa-2x sm:fa-3x animate-bounce mb-2 mr-2 text-green"></i>
        <div className="text-indigo-600 text-lg">Manager</div>
      </div>
    </header>
  );
  
}

export default Header;
