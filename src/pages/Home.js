function Home() {
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
    <div className="flex flex-col items-center m-6 p-6 justify-center ">
      <h1 className="text-4xl font-bold mb-6">
        {greeting}, Ms. M. FreshPick welcomes you
      </h1>
      <p className="text-lg text-gray-500">
        Make your grocery shopping hassle-free and never forget an item again !!
      </p>
    </div>
  );
}

export default Home;
