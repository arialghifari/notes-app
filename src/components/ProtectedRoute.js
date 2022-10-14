import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../utils/network-data';

const ProtectedRoute = ({ children, loginOnlyPage = true }) => {
  const navigate = useNavigate();
  const userToken = getAccessToken();

  useEffect(() => {
    if (!userToken && loginOnlyPage) return navigate('/login');
    if (userToken && !loginOnlyPage) return navigate('/');
  });

  return children;
};

export default ProtectedRoute;
