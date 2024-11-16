import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // assuming you want to handle dynamic route for itemId
import Header from "../../comonents/Header"; // Import header component
import robot from '../../assets/botu.jpg'; // Import image

// Define an interface for user data
interface UserData {
  itemID: string;
  shippedDate: string;
  deliveryDate: string;
  weight: number;
  charge: number;
}

export default function User() {
  const { itemId } = useParams(); // Get itemId from URL
  const [userData, setUserData] = useState<UserData | null>(null); // Specify type for userData

  useEffect(() => {
    const fetchUserDetails = async () => {
      const response = await fetch(`http://localhost:5000/api/user/details`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ itemId }),
      });
      const data = await response.json();
      if (response.ok) {
        setUserData(data); // Set user data on successful fetch
      } else {
        alert(data.message);
      }
    };

    fetchUserDetails();
  }, [itemId]);

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center" style={{ backgroundImage: `url(${robot})` }}>
      <Header />
      <div className="flex-1 flex items-center justify-center py-10">
        <div className="bg-black bg-opacity-50 w-full max-w-lg p-6 rounded-xl shadow-lg space-y-6">
          <h2 className="text-white text-2xl font-semibold mb-4">User Info</h2>
          {userData ? (
            <div className="text-white">
              <p><strong>Item ID:</strong> {userData.itemID}</p>
              <p><strong>Shipped Date:</strong> {userData.shippedDate}</p>
              <p><strong>Delivery Date:</strong> {userData.deliveryDate}</p>
              <p><strong>Weight:</strong> {userData.weight} kg</p>
              <p><strong>Charge:</strong> {userData.charge}</p>
            </div>
          ) : (
            <p className="text-white">Loading user data...</p>
          )}
        </div>
      </div>
    </div>
  );
}
