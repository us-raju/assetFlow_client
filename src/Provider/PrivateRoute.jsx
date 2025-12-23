import { Navigate, useLocation } from "react-router";
import useAuth from "../Hooks/useAuth";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) return <Loading></Loading>;

  console.log(user);
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
