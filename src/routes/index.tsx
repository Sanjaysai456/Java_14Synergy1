import { Link } from 'react-router-dom';
import '../index.css';

export default function IndexPage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-black text-white p-4">
    <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Moveble-Bot</div>

        {/* Centered Navigation Links */}
        <nav className="flex-grow flex justify-center space-x-6">
            <Link to="/" className="hover:underline">
                Home
            </Link>
            <h1>fgg</h1>
            <Link to="/contact" className="hover:underline">
                Contact Us
            </Link>
            <Link to="/about" className="hover:underline">
                About
            </Link>
        </nav>

        {/* Login and Sign Up Buttons */}
        <div className="flex space-x-4">
            <Link to="/sign-in">
                <button className="border border-white text-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
                    Login
                </button>
                <h1>hello</h1>
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
            <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-zinc-500 to-gray-100 text-center">
                <h1 className="text-5xl font-extrabold mb-6">
                   Welcome ! 
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                    Please Sing-up to Get Started 
                </p>
                <div className="flex space-x-6">
                    <Link to="/for-mentees">

                    </Link>
                    <Link to="/for-mentors">

                    </Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-black text-white py-12">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Moveble-Bot</h3>
                        <p>Connecting mentors and mentees for success.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="hover:underline">About Us</Link></li>
                            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><Link to="/terms" className="hover:underline">Terms of Service</Link></li>
                            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                        <div className="space-x-4">
                            <Link to="#" className="hover:text-gray-400">
                                <i className="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="#" className="hover:text-gray-400">
                                <i className="fab fa-twitter"></i>
                            </Link>
                            <Link to="#" className="hover:text-gray-400">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    &copy; 2024 MentorMatch. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
