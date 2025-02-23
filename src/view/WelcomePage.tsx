import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-200 via-white to-teal-100 overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-teal-300 to-blue-300 opacity-20 blur-3xl"></div>

            {/* Header Bar */}
            <header className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0">
                {/* Logo and Title */}
                <div className="flex items-center space-x-3">
                    <img src="/logo.jpg" alt="Logo" className="h-15 w-14" />
                    <h1 className="text-4xl font-bold text-blue-800">Paw Care.</h1>
                </div>

                {/* Auth Buttons */}
                <div className="space-x-4">
                    <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition"
                    onClick={() => navigate('/login')}>
                        Login
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-500 transition"
                        onClick={() => navigate("/signup")}
                    >
                        Signup
                    </button>
                </div>
            </header>

            {/* Welcome Content with Centered Image Cards */}
            <main className="mt-18 text-center flex flex-col items-center">
                <h2 className="text-5xl font-bold text-blue-600">Welcome to Paw Care.</h2>
                <p className="mt-2   text-blue-500">Your one-stop solution for pet care services.</p>

                {/* Image Cards Section */}
                <div className="mt-10 grid grid-cols-3 md:grid-cols-3 gap-10">
                    {/* Card 1 */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-80 h-96 transform transition duration-300 hover:scale-105 cursor-pointer">
                        <img src="/src/assets/welcomePage/Event.jpeg" alt="Pet Care" className="w-64 h-60 object-cover rounded-lg" />
                        <h3 className="mt-4 text-xl font-bold text-gray-800">Event</h3>
                        <p className="text-gray-500 mt-2 text-center">Stay updated with upcoming pet events and activities.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-80 h-96 transform transition duration-300 hover:scale-105 cursor-pointer">
                        <img src="/src/assets/welcomePage/Donation.jpeg" alt="Pet Care" className="w-64 h-60 object-cover rounded-lg" />
                        <h3 className="mt-4 text-xl font-bold text-gray-800">Donation</h3>
                        <p className="text-gray-500 mt-2 text-center">Support pet care initiatives by making donations.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center w-80 h-96 transform transition duration-300 hover:scale-105 cursor-pointer">
                        <img src="src/assets/welcomePage/lost.jpeg" alt="Pet Care" className="w-64 h-60 object-cover rounded-lg" />
                        <h3 className="mt-4 text-xl font-bold text-gray-800">Lost & Found</h3>
                        <p className="text-gray-500 mt-2 text-center">Help reunite lost pets with their families.</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default WelcomePage;
