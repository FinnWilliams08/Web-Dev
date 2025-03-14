import { useState, useEffect, createContext } from "react";
import { useToken } from "./useToken";
import { jwtDecode } from "jwt-decode"; // Correct import for version 4.x

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [token, setToken] = useToken();
  const [currentUser, setCurrentUser] = useState(null);

  const getCurrentUser = () => {
    if (!token || typeof token !== "string") {
      console.error("Invalid token:", token);
      return null;
    }

    try {
      return jwtDecode(token);
    } catch (e) {
      console.error("Error decoding token:", token, e);
      setToken(null);
      return null;
    }
  };

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, [token]);

  console.log("Current user:", currentUser);

  return (
    <CurrentUserContext.Provider value={[currentUser, token, setToken]}>
      {children}
    </CurrentUserContext.Provider>
  );
};
