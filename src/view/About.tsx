function About() {
    return (
        <div className={'flex flex-col'}>
            <div className="bg-white flex h-screen pb-20 ml-8 mt-8">
                <div className="bg-white flex flex-col items-center h-screen pb-20 gap-6">
                    <div className="card bg-[white] p-6 rounded-lg shadow-lg w-52 flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-50">
                        <p className="text-[38px] text-blue-400 font-bold">25</p>
                        <p className="text-[27px] text-blue-900 font-semibold">Registered</p>
                        <p className="text-[27px] text-blue-900 font-semibold">Pets</p>
                    </div>
                    <div className="card bg-[white] p-6 rounded-lg shadow-lg w-52 flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-50">
                        <p className="text-[38px] text-blue-400 font-bold">40</p>
                        <p className="text-[27px] text-blue-900 font-semibold">Registered</p>
                        <p className="text-[27px] text-blue-900 font-semibold">Users</p>
                    </div>
                    <div className="card bg-[white] p-6 rounded-lg shadow-lg w-52 flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105 hover:bg-blue-50">
                        <p className="text-[38px] text-blue-400 font-bold">15</p>
                        <p className="text-[27px] text-blue-900 font-semibold">Registered</p>
                        <p className="text-[27px] text-blue-900 font-semibold">Vets</p>
                    </div>
                </div>

                <div className="w-full sm:w-5/6 flex justify-center">
                    <div className="flex flex-col items-center w-full mt-10 mr-24">
                        <div className="text-gray-900 text-4xl text-center whitespace-nowrap">
                            <div className="text-6xl font-bold animate-color-change">
                                Happy Little Paws
                            </div>
                        </div>
                        <div className="text-xl text-blue-900 text-center mt-14 max-w-2xl">
                            Paw Care" emerges as a visionary initiative fueled by a sincere passion for the well-being of our beloved four-legged companions. Recognizing the unique challenges faced by rescue organizations and dedicated pet enthusiasts, paw Care seeks to redefine the way we connect with, nurture, and celebrate our paw friends.
                            <div className="mt-12">
                                <button className="w-[120px] h-[35px] mx-2 rounded-2xl bg-[blue] text-white font-semibold">
                                    About Us
                                </button>
                                <button className="w-[120px] h-[35px] mx-2 rounded-2xl bg-white text-[#071722] border-[#071722] border">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-24 bg-white p-10">
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
                    <div key={index} className="flex flex-col items-center">
                        <img
                            loading="lazy"
                            src={item.src}
                            className="w-52 h-52 object-cover rounded-full border-4 border-gray-300 shadow-lg cursor-pointer transition-transform transform hover:scale-105"
                            alt={item.title}
                        />
                        <div className="text-black text-lg mt-5 font-semibold text-center">
                            {item.title}
                        </div>
                        <p className="text-blue-600 text-center mt-3 max-w-xs">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
