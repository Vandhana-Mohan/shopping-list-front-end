import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div
      className="mx-auto px-4 py-10 max-w-lg rounded-lg shadow-green-500/50 border shadow-md"
      style={{ paddingBottom: "10rem" }}
    >
      <h1 className="text-3xl font-bold tracking-wide text-gray-900">
        About FreshPick
      </h1>
      <p className="mt-6 text-lg text-justify text-gray-500">
        FreshPick is your go-to grocery app for all your grocery needs. Our app
        is designed to help you easily browse, select and add items to your
        cart. We provide an extensive range of products for you to choose from,
        including fresh produce, pantry essentials, and household items.
      </p>
      <p className="mt-6 text-lg text-justify text-gray-500">
        Our user-friendly interface makes it easy for you to categorize your
        purchases. With FreshPick, you can stay on top of your grocery shopping
        game, while saving time and money.
      </p>
      <Link to="/">
        <h2 className="mt-10 bg-green-300 hover:bg-green-100 text-2xl font-bold py-3 px-3 flex focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md w-max">
          Lets Begin Shopping &nbsp;&nbsp;🛒 &nbsp;🛒 &nbsp;🛒
        </h2>
      </Link>
    </div>
  );
}

export default AboutUs;
