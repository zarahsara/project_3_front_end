import { verifyToken } from "../utils/api";

const { createContext, useState, useEffect } = require("react");

const AuthContext = createContext();

function AuthProviderWrapper({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user,  setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("menu_token", token);
  };

  const removeToken = () => {
    localStorage.removeItem("menu_token");
  };

  const authenticateUser = async () => {
    const token = localStorage.getItem("menu_token");
    if (token) {
      const res = await verifyToken(token);
      setIsLoggedIn(true);
      setUser(JSON.parse(res.data));
      setIsLoading(false);
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  };

  const logOutUser = async () => {
    removeToken();
    await authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProviderWrapper };