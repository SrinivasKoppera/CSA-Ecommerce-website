import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn) {
    return <Outlet {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
