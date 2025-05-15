import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('currentUser');
    
    if (auth === 'true' && userData) {
      try {
        setCurrentUser(JSON.parse(userData));
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
    setLoading(false);
  }, []);
  

  const login = (email, password) => {
    try {
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      const hashedPassword = btoa(password);
      const user = storedUsers.find(
        (u) => u.email === email && u.password === hashedPassword
      );
  
      if (user) {
        setCurrentUser(user);
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };
  

  const register = (userData) => {
    try {
      const hashedPassword = btoa(userData.password);
      const newUser = {
        ...userData,
        password: hashedPassword,
        id: Date.now().toString(),
      };
  
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      storedUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(storedUsers));
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };
  

  const logout = () => {
    try {
      setIsAuthenticated(false);
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('currentUser');
      setTimeout(() => {
        setCurrentUser(null);
      }, 0);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  

  const updateProfile = (updatedData) => {
    try {
      const updatedUser = { ...currentUser, ...updatedData };
      setCurrentUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error('Update profile error:', error);
      return false;
    }
  };

  const value = {
    currentUser,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;