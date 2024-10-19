import { useAuth } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function DashboardLayout() {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded) {
      if (!userId) {
        navigate('/sign-in'); // If not signed in, redirect to sign-in
      }
    }
  }, [isLoaded, userId]);

  if (!isLoaded) return 'Loading...';

  return <Outlet />;
}
