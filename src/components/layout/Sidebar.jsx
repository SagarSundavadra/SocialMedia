import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 
      'bg-purple-100 text-purple-700 border-r-4 border-purple-500' : 
      'text-gray-700 hover:bg-purple-50';
  };

  const menuItems = [
    { path: '/home', name: 'Home', icon: '🏠' },
    { path: '/profile', name: 'Profile Settings', icon: '⚙️' },
    { path: '/feed', name: 'Feed', icon: '📰' },
    { path: '/posts', name: 'Your Posts', icon: '📝' },
  ];

  return (
    <aside className="bg-pink-50 shadow-md h-screen w-64 fixed top-16 left-0 z-10">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center p-3 rounded-md transition ${isActive(item.path)}`}
              >
                <span className="mr-3 text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;