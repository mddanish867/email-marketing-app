import React, { useState } from 'react';

const AccountManagement = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    preferences: {
      newsletters: true,
      promotions: false,
    },
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setProfile({
      ...profile,
      preferences: { ...profile.preferences, [name]: checked },
    });
  };

  const handleSaveChanges = () => {
    // Implement editProfile() and updatePreferences() here
    console.log('Profile updated:', profile);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-sm border max-w-md w-full">
        <h2 className="text-3xl font-semibold text-center mb-6 text-indigo-400">Account Management</h2>

        {/* Profile Information Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Profile Information</h3>
          <form className="space-y-4 mt-4">
            <div>
              <label className="block text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
          </form>
        </div>

        {/* Email Preferences Section */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-700">Email Preferences</h3>
          <div className="mt-4 space-y-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="newsletters"
                checked={profile.preferences.newsletters}
                onChange={handlePreferenceChange}
                className="h-4 w-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-400"
              />
              <span className="ml-2 text-gray-600">Receive Newsletters</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                name="promotions"
                checked={profile.preferences.promotions}
                onChange={handlePreferenceChange}
                className="h-4 w-4 text-indigo-500 border-gray-300 rounded focus:ring-indigo-400"
              />
              <span className="ml-2 text-gray-600">Receive Promotions</span>
            </label>
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSaveChanges}
          className="w-full bg-gradient-to-r from-indigo-600 to-indigo-200 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default AccountManagement;
