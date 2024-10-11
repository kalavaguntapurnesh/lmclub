const AboutHero = () => {
  return (
    <div>
      <section className="h-screen text-black">
        <div className="max-w-[1400px] mx-auto">
          <div className="mt-40">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex justify-center items-center">
                <img
                  src="https://www.plentific.com/_next/image/?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F233758%2F1224x1024%2F92e7f917c6%2Fgraphic.jpg&w=1920&q=75"
                  alt=""
                  width="612"
                  height="512"
                />
              </div>
              <div className="space-y-6 flex justify-center flex-col items-center mx-4">
                <div className="md:text-start text-center">
                  <h1 className="md:text-5xl text-4xl">
                    A story of real estate, real people & real-time software.
                  </h1>
                </div>

                <div className="md:text-start text-center text-gray-700 font-light">
                  <p>
                    Plentific was founded by Emre Kazan and Cem Savas to make it
                    easy to find reliable trade services and manage property
                    repairs and maintenance. They believed property management
                    could and should be better — for local trades specialists,
                    property managers and residents alike.
                  </p>
                </div>

                <div className="flex md:justify-start justify-center w-full">
                  <button class="border-[1px] border-[#061421] bg-[#061421] hover:bg-colorFour hover:text-white transition duration-1000 text-white py-2 px-6 rounded font-light">
                    See all the Integrations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;
