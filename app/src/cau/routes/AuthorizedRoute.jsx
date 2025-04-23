import { Navigate } from 'react-router-dom';

export const AuthorizedRoute = ({
  userData,
  allowedProfile,
  children,
}) => {
  if (userData.profile !== allowedProfile) {
    return <Navigate to="menu" />;
  }

  return children;
};
