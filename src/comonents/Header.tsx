import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { SignedIn, UserButton, useUser } from '@clerk/clerk-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useUser(); // Use useUser instead of useAuth

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      {/* UserButton and Username aligned to the top-right */}
      <div className="text-white absolute top-4 right-4 z-50 flex items-center space-x-2">
        <SignedIn>
          {/* Display Username and UserButton */}
          {user && (
            <div className="bg-white bg-opacity-50 rounded w-19 px-2 pt-2 pb-2">
              <UserButton
                showName
                appearance={{
                  elements: {
                    userProfileButton: 'text-white',
                  },
                }}
              />
            </div>
          )}
        </SignedIn>
      </div>

      {/* Hamburger Icon */}
      <div className="absolute top-4 left-4 z-50">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-black bg-opacity-50 shadow-lg w-64 transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Close Menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-4">
          <h2 className="text-white text-lg font-bold mb-4">Menu</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-white hover:underline block py-2 px-4 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:underline block py-2 px-4 rounded">
                Bot's status
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-white hover:underline block py-2 px-4 rounded">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay when Menu is Open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-10 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}
