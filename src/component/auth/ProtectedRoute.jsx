import { Navigate, useLocation } from "react-router-dom";
import { clearInvalidAuthState } from "../../services/authApi";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuthed = clearInvalidAuthState();

  if (!isAuthed) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
