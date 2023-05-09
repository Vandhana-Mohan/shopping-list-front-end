import Vandhana from "../assets/vandhana.jpeg";
function Developers() {
  const developers = [
    {
      name: "Touhami Ben",
      photo: "https://via.placeholder.com/50",
      bio: "Touhami is a full-stack developer with a passion for creating elegant solutions to complex problems. In his free time, he enjoys hiking and playing guitar.",
      github: "https://github.com/touhami-ben",
      linkedin: "https://www.linkedin.com/in/touhami-benmessaoud-aaa072259/",
    },
    {
      name: "Vandhana Mohan",
      photo: Vandhana,
      bio: "I'm a full-stack web developer who loves crafting beautiful and intuitive user experiences. She is also an avid traveler and amateur in gardening.",
      github: "https://github.com/Vandhana-Mohan",
      linkedin: "https://www.linkedin.com/in/vandhanamohan/",
    },
  ];

  return (
    <div
      className="mx-auto px-4 py-10 max-w-7xl"
      style={{ paddingBottom: "10rem" }}
    >
      <h1 className="text-3xl font-bold text-gray-900 text-center">
        About FreshPick Developers
      </h1>
      <br /> <br />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {developers.map((developer, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex"
          >
            <img className="w-1/2" src={developer.photo} alt={developer.name} />
            <div className="px-4 py-4 flex flex-col justify-between">
              <div>
                <h2 className="font-bold text-2xl mb-2">{developer.name}</h2>
                <p className="text-gray-800 text-base max-w-md mb-4">
                  {developer.bio}
                </p>
              </div>
              <div className="flex justify-between items-center my-8">
                <div className="flex items-center mx-32 mr-4">
                  <a href={developer.github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github fa-2x mr-2"></i>
                  </a>
                  <a href={developer.linkedin} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in fa-2x"></i>
                  </a>
                </div>
                <p className="text-gray-800 text-base">{developer.funFact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developers;
