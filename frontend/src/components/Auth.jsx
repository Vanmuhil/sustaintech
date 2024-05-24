import React, { useContext, useState } from "react";

const AuthContext = React.createContext();

export const Auth = (props) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (userData , id) => {
    setUser(userData);
    setUserId(id)
  };

  const logout = () => {
    setUser(null);
      localStorage.removeItem('isLoggedIn'); // Clear user data from local storage
      window.location.reload()
  
  };

  return (
    <>
      <AuthContext.Provider value={{ user, login , logout,  }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};