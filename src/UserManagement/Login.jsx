import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement loginUser() function here
    console.log('User data:', formData);
  };

  const handleOAuthLogin = (provider) => {
    // Implement OAuth login logic here (e.g., Google, Facebook)
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-400">Welcome Back!</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-200 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="my-4 text-center text-gray-500">or login with</div>
        <div className="flex space-x-4 justify-center">
          <button
            onClick={() => handleOAuthLogin('Google')}
            className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            <FaGoogle className="mr-2" /> Google
          </button>
          <button
            onClick={() => handleOAuthLogin('Facebook')}
            className="flex items-center justify-center w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            <FaFacebook className="mr-2" /> Facebook
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don't have an account? <a href="/register" className="text-indigo-500">Sign up</a>
        </p>
        <p className="text-sm text-gray-500 text-center mt-2">
          Forgot your password? <a href="/forgot-password" className="text-indigo-500">Reset it</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
