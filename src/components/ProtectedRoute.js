import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAccessToken } from '../utils/network-data';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children, loginOnlyPage = true }) => {
  const navigate = useNavigate();
  const userToken = getAccessToken();

  useEffect(() => {
    if (!userToken && loginOnlyPage) return navigate('/login');
    if (userToken && !loginOnlyPage) return navigate('/');
  });

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.object.isRequired,
  loginOnlyPage: PropTypes.bool,
};

export default ProtectedRoute;
