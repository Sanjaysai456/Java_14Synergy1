import React, { useState } from "react";
import Header from "../comonents/Header";
import inv from "../assets/inv.jpg";
import robot from "../assets/botu.jpg";

export default function DashboardPage() {
  // State to store API data
  const [botData, setBotData] = useState<string | null>(null);

  // Handle search input and make API call
  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const botID = event.target.value;

    if (botID.trim() === "") {
      setBotData(null); // Reset if input is empty
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/data?botID=${botID}`); // Adjust the endpoint if needed
      const result = await response.json();
      setBotData(result.message); // Set the message or data from the backend
    } catch (error) {
      console.error("Error fetching bot data:", error);
      setBotData("Error fetching bot data"); // Handle errors
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{ backgroundImage: `url(${robot})` }}
    >
      {/* Header with Sidebar */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-10">
        <div className="bg-black bg-opacity-50 w-full max-w-2xl p-6 rounded-xl shadow-lg space-y-6">
          {/* Search Box */}
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-xl font-semibold text-white">Search Bot ID</h2>
            <input
              type="text"
              placeholder="Enter Bot ID"
              onChange={handleSearch}
              className="p-3 rounded-md bg-black bg-opacity-60 text-white w-full focus:outline-none focus:ring-2 focus:ring-white-500"
            />
          </div>

          {/* Display Search Result */}
          <div className="mt-4 p-4 bg- rounded-md">
            {botData ? (
              <p className="text-white">Bot Data: {botData}</p>
            ) : (
              <p className="text-gray-400">Enter a Bot ID to fetch data</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
