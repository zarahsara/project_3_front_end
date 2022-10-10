import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import Spinner from "../components/Spinner";


export default function IsPrivate({ children }) {
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  if (isLoading) return <Spinner />;
  if (!isLoggedIn) return <Navigate to="/login" />;
  return children;
}