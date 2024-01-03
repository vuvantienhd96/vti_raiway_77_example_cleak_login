import * as React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function DashboardLayout() {
  // check user da ton tai chua
  const { userId, isLoaded } = useAuth();

  // hook dieu huong
  const navigate = useNavigate();

  console.log('test', userId);

  React.useEffect(() => {
    if (!userId) {
      // chuyen ve trang sign in
      navigate('/sign-in');
    }
  }, []);

  if (!isLoaded) return 'Loading...';

  return <Outlet />;
}
