import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProtectedRoute() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded) {
      if (!userId) {
        navigate('/sign-in');
      }
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return null;
}