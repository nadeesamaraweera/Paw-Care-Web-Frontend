function About() {
    return (
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16">
            <div className="bg-white flex flex-col md:flex-row w-full items-center md:items-start h-auto pb-10 md:pb-20 mt-8">
                <div className="flex flex-col items-center gap-6 w-full md:w-1/3">
                    {[
                        { number: "25", label1: "Registered", label2: "Pets" },
                        { number: "40", label1: "Registered", label2: "Users" },
                        { number: "15", label1: "Registered", label2: "Vets" },
                    ].map((item, index) => (
                        <div key={index} className="card bg-white p-6 rounded-lg shadow-lg w-52 flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-50">
                            <p className="text-[38px] text-blue-400 font-bold">{item.number}</p>
                            <p className="text-[27px] text-blue-900 font-semibold">{item.label1}</p>
                            <p className="text-[27px] text-blue-900 font-semibold">{item.label2}</p>
                        </div>
                    ))}
                </div>

                <div className="w-full md:w-2/3 flex justify-center mt-10 md:mt-0">
                    <div className="flex flex-col items-center w-full text-center">
                        <div className="text-blue-900 text-6xl sm:text-6xl font-bold animate-color-change mt-12">
                            Happy Little Paws
                        </div>
                        <p className="text-lg sm:text-xl text-blue-900 mt-12 max-w-2xl px-4">
                            "Paw Care" emerges as a visionary initiative fueled by a sincere passion for the well-being
                            of our beloved four-legged companions. We understand the unique bond between humans and pets
                            and strive to create a platform where love and care go hand in hand. Our goal is to connect
                            pet lovers, professionals, and organizations to ensure every furry friend receives the best
                            care possible. Whether you need expert veterinary advice, pet clinic assistance, or support
                            from dedicated pet organizations, we are here to help. Join us in making a difference for
                            our cherished companions, one paw at a time.
                        </p>
                        <div className="mt-12 flex flex-col sm:flex-row gap-4">
                            <button className="w-32 h-10 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">About Us
                            </button>
                            <button className="w-32 h-10 rounded-2xl bg-white text-[#071722] border border-[#071722] hover:bg-gray-100 transition">Contact Us
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-12 bg-white p-10 w-full">
                {[
                    {
                        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d00a7fc1c60a4421d954abe15657360530ae19e397ee6087449923129d1becb?apiKey=1e1d1af84687413c90642ed83011e3eb&width=200",
                        title: "Need a help of Veterinarian?",
                        description: "Need expert guidance for your pet's well-being? Experienced veterinarians are here to help you ensure the best care for your furry friends.",
                    },
                    {
                        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/08aa9a229c98528635881c0ecc89ffc1b67853410b0be63bedaeb19d33a915a5?apiKey=1e1d1af84687413c90642ed83011e3eb&width=200",
                        title: "Need a help of Pet Clinic?",
                        description: "Visit our pet clinic for compassionate care and expert advice to keep your furry companions happy and healthy!",
                    },
                    {
                        src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dde60758ce3994c2e6fa5441ba842e56a5beda0bbcf1d8fcf81f73784631e76e?apiKey=1e1d1af84687413c90642ed83011e3eb&width=200",
                        title: "Need a help of Organization?",
                        description: "Our organizations are dedicated to providing assistance, ensuring that we're here to support you every step of the way.",
                    },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-full sm:w-64 text-center">
                        <img
                            loading="lazy"
                            src={item.src}
                            className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-full border-4 border-gray-300 shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                            alt={item.title}
                        />
                        <div className="text-black text-lg font-semibold mt-5">
                            {item.title}
                        </div>
                        <p className="text-blue-600 mt-3 max-w-xs">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
