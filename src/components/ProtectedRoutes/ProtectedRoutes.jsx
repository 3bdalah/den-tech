import { Navigate } from "react-router-dom";
const ProtectedRoutes = (props) => {
  const token = localStorage.getItem("token");

  if (token) {
    // eslint-disable-next-line react/prop-types
    return props.children;
  } else {
    return <Navigate to={"/login"} />;
  }
};

export default ProtectedRoutes;
