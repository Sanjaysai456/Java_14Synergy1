import React from 'react';
import { Link } from "react-router-dom";
import "./index.css";

export default function IndexPage() {
  const botImage = "/bot.png"; // Reference image from public folder

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${botImage})` }}
    >
      {/* Header */}
      <header className="h-16 p-4 bg-black/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">Moveble-Bot</div>

          {/* Centered Navigation Links */}
          <nav className="flex-grow flex justify-center space-x-6">
            <Link
              to="/contact"
              className="text-gray-200 hover:text-white hover:underline px-3 py-2 rounded transition-colors duration-200"
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              className="text-gray-200 hover:text-white hover:underline px-3 py-2 rounded transition-colors duration-200"
            >
              About
            </Link>
          </nav>

          {/* Login and Sign Up Buttons */}
          <div className="flex space-x-4">
            <Link to="/sign-in">
              <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-200">
                Login
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition-colors duration-200">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-between lg:space-x-8 p-6 max-w-6xl mx-auto">
        {/* Text Content */}
        <div className="lg:w-1/2 text-left text-white space-y-4">
          <h1 className="text-5xl font-extrabold">Welcome!</h1>
          <h2 className="text-2xl font-semibold">Sign-up to Get Started...</h2>
          <p className="text-lg text-gray-200">
            Moveble-Bot is your ultimate assistant for effortless movement and
            navigation. From picking up items to providing seamless assistance,
            this bot is here to simplify your daily tasks.
          </p>
        </div>

        {/* Profile Image */}
        <div className="lg:w-1/2 flex justify-end mt-8 lg:mt-0">
          <img
            src={botImage}
            alt="Bot"
            className="w-96 h-96 object-cover rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </main>
    </div>
  );
}
