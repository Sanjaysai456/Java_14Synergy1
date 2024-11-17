import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key');
}

export default function RootLayout() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
            publishableKey={PUBLISHABLE_KEY}
        >
            <header className="bg-black/50 p-4">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold text-white">
                        Moveble-Bot
                    </Link>
                    
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

                    <div className="space-x-4">
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
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
                        </SignedOut>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </ClerkProvider>
    );
}
