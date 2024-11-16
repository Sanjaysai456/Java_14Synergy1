import { Link } from 'react-router-dom';
import '../index.css';
import img from '../assets/bot.png';  // You can remove this as you won't need this image in the main section anymore.
import robot from '../assets/botu.jpg';
import inv from '../assets/inv.jpg' // The robot image you want to set as the background

export default function IndexPage() {
    return (
        <div
            className="min-h-screen flex flex-col bg-cover bg-center"
            style={{ backgroundImage: `url(${robot})` }}
        >
            {/* Header */}
            <header className="h-15 p-4 bg-black bg-opacity-50"> {/* Optional: Add semi-transparent background for header */}
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-white">Moveble-Bot</div>

                    {/* Centered Navigation Links */}
                    <nav className="flex-grow flex justify-center space-x-6">
                        <Link
                            to="/contact"
                            className="hover:text-white hover:underline px-3 py-2 rounded transition"
                        >
                            Contact Us
                        </Link>
                        <Link
                            to="/about"
                            className="hover:text-white hover:underline px-3 py-2 rounded transition"
                        >
                            About
                        </Link>
                    </nav>

                    {/* Login and Sign Up Buttons */}
                    <div className="flex space-x-4">
                        <Link to="/sign-in">
                            <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
                                Login
                            </button>
                        </Link>
                        <Link to="/sign-up">
                            <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Section */}
            <main className="flex-1 flex flex-col lg:flex-row items-center justify-between lg:space-x-8 px-6 max-w-6xl mx-auto">
                {/* Text Content */}
                <div className="lg:w-1/2 text-left text-white">
                    <h1 className="text-5xl font-extrabold mb-6">
                        Welcome !
                    </h1>
                    <h1> Sign-up to Get Started...</h1>
                    <p className="text-lg text-gray-200 mb-4 mt-2">
                        Moveble-Bot is your ultimate assistant for effortless movement and navigation. From picking up items to providing seamless assistance, this bot is here to simplify your daily tasks.
                    </p>
                </div>

                {/* Profile Image */}
                <div className="lg:w-1/2 flex justify-end">
                    <img
                        src={img}
                        alt="Bot"
                        className="w-96 h-96 rounded-full border-4 border-white shadow-lg"
                    />
                </div>
            </main>
        </div>
    );
}
