import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import ProfileSettings from '../components/profile/ProfileSettings';
import { useAuth } from '../context/AuthContext';

function Profile() {
  const { currentUser, updateProfile } = useAuth();

  const handleUpdateProfile = (updatedData) => {
    updateProfile(updatedData);
    alert('Profile updated successfully!');
  };

  return (
    <div className="ml-64 min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
            <p className="text-gray-600">Update your personal information and account settings.</p>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <ProfileSettings 
              currentUser={currentUser} 
              onUpdateProfile={handleUpdateProfile} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;