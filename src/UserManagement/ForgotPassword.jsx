import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement forgotPassword() function here
    console.log('Reset link sent to:', email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-sm border max-w-md w-full">
        <h2 className="text-2xl font-semibold text-center mb-6 text-indigo-400">Forgot Password?</h2>
        <p className="text-center text-gray-600 mb-4">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-200 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Remember your password? <a href="/login" className="text-indigo-500">Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
