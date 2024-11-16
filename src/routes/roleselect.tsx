import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import robot from "../assets/invblur.jpg";

// Fake data for admin and users
const fakeData = {
    admin: { id: "admin123", passCode: "123" },
    users: [
        { id: "user1", passCode: "pass1" },
        { id: "user2", passCode: "pass2" },
        { id: "user3", passCode: "pass3" },
        { id: "user4", passCode: "pass4" },
        { id: "user5", passCode: "pass5" },
        { id: "user6", passCode: "pass6" },
        { id: "user7", passCode: "pass7" },
        { id: "user8", passCode: "pass8" },
        { id: "user9", passCode: "pass9" },
        { id: "user10", passCode: "pass10" },
    ],
};

export default function Roleselect() {
    const [selectedRole, setSelectedRole] = useState<string>('');
    const [adminId, setAdminId] = useState<string>('');
    const [passCode, setPassCode] = useState<string>('');
    const [itemId, setItemId] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false); // To toggle password visibility
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedRole(event.target.value);
        setAdminId('');
        setPassCode('');
        setItemId('');
    };

    const handleSubmit = () => {
        if (selectedRole === "Admin") {
            if (adminId === fakeData.admin.id && passCode === fakeData.admin.passCode) {
                console.log("Admin authenticated");
                navigate("/dashboard");
            } else {
                alert("Invalid Admin credentials");
            }
        } else if (selectedRole === "User") {
            const user = fakeData.users.find(
                (user) => user.id === itemId && user.passCode === passCode
            );
            if (user) {
                console.log("User authenticated:", user);
                navigate("/user");
            } else {
                alert("Invalid User credentials");
            }
        } else {
            alert("Please fill in all fields!");
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col bg-cover items-center justify-center bg-center"
            style={{ backgroundImage: `url(${robot})` }}
        >
            <div className="bg-black bg-opacity-50 p-8 w-80 md:w-96 rounded-lg shadow-lg">
                <h2 className="text-white text-2xl font-semibold mb-4">Select  your role?</h2>

                <div className="relative mb-4">
                    <select
                        className="appearance-none w-full bg-black bg-opacity-60 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
                        value={selectedRole}
                        onChange={handleChange}
                    >
                        <option className="bg-black bg-opacity-60 text-white" value="" disabled>Select Role</option>
                        <option className="bg-black bg-opacity-60 text-white" value="Admin">Admin</option>
                        <option className="bg-black bg-opacity-60 text-white" value="User">User</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </div>
                </div>

                {selectedRole === "Admin" && (
                    <div>
                        <input
                            type="text"
                            className="w-full bg-black bg-opacity-50 text-white p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Admin ID"
                            value={adminId}
                            onChange={(e) => setAdminId(e.target.value)}
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full bg-black bg-opacity-50 text-white p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="Pass Code"
                                value={passCode}
                                onChange={(e) => setPassCode(e.target.value)}
                            />
                            <button
                                className="absolute inset-y-0 right-4 flex mt-1 mb-5 items-center text-white"
                                onClick={() => setShowPassword(!showPassword)}
                                type="button"
                            >
                                {showPassword ? "👁️" : "🙈"}
                            </button>
                        </div>
                    </div>
                )}

                {selectedRole === "User" && (
                    <div>
                        <input
                            type="text"
                            className="w-full bg-black bg-opacity-50 text-white p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            placeholder="Item ID"
                            value={itemId}
                            onChange={(e) => setItemId(e.target.value)}
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full bg-black bg-opacity-50  text-white p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                                placeholder="Pass Code"
                                value={passCode}
                                onChange={(e) => setPassCode(e.target.value)}
                            />
                                 <button
                                className="absolute inset-y-0 right-4  mt-1 mb-5 flex items-center text-white"
                                onClick={() => setShowPassword(!showPassword)}
                                type="button"
                            >
                                {showPassword ? "👁️" : "🙈"}
                            </button>
                        </div>
                    </div>
                )}

                <button
                    className="bg-white text-black font-bold py-2 px-4 rounded-lg w-full"
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}
