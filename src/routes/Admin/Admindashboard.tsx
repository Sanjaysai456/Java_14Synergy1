import React, { useState, useEffect } from "react";  // <-- Add useEffect here
import { useParams } from "react-router-dom"; // assuming you want to handle dynamic route for botId
import Header from "../../comonents/Header"; // Import header component
import robot from '../../assets/botu.jpg'; // Import image
// Import image

interface BotData {
    battery: number;
    tasksCompleted: number;
    currentWeight: number;
    maxWeight: number;
  }
  
  export default function AfterSearchBotId() {
    const { botId } = useParams();
    const [botData, setBotData] = useState<BotData | null>(null);  // <-- Explicit type for botData
  
    // Fetch bot details when the component loads
    useEffect(() => {
      const fetchBotDetails = async () => {
        const response = await fetch(`http://localhost:5000/api/admin/bot/${botId}`);
        const data = await response.json();
        if (response.ok) {
          setBotData(data);  // Set bot data on successful fetch
        } else {
          alert(data.message);
        }
      };
  
      fetchBotDetails();
    }, [botId]);
  
    return (
      <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${robot})` }}>
        <Header />
        <div className="flex-1 flex items-center justify-center py-10">
          <div className="bg-black bg-opacity-50 w-full max-w-2xl p-6 rounded-xl shadow-lg space-y-6">
            <h2 className="text-white text-2xl font-semibold mb-4">Bot Info</h2>
            {botData ? (
              <div className="text-white">
                <p><strong>Battery:</strong> {botData.battery}%</p>
                <p><strong>Tasks Completed:</strong> {botData.tasksCompleted}</p>
                <p><strong>Current Weight:</strong> {botData.currentWeight} kg</p>
                <p><strong>Max Weight:</strong> {botData.maxWeight} kg</p>
              </div>
            ) : (
              <p className="text-white">Loading bot data...</p>
            )}
          </div>
        </div>
      </div>
    );
  }
  