import { Navigate } from 'react-router-dom';

export const AuthorizedRoute = ({
  userProfile,
  allowedProfiles = [],
  children,
}) => {
  if (!allowedProfiles.includes(userProfile)) {
    return <Navigate to="menu" />;
  }

  return children;
};
