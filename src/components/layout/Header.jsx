import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Instagram</h1>
        
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline">Hello, {currentUser?.username || 'User'}</span>
          <button 
            onClick={handleLogout}
            className="bg-white text-purple-600 px-4 py-1 rounded-md hover:bg-gray-100 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;