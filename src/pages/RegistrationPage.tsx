import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registering with:', { fullName, username, email, password });
    // Example: Call an API to register the user
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Land Ownership Information System</h1>
          <p className="text-gray-600">OFFICIAL REGISTRY PORTAL</p>
        </div>
        <form className="text-left" onSubmit={handleRegister}>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Register</h2>
          <p className="text-gray-500 mb-6">Create your account to access the registry</p>
          <div className="mb-4">
            <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="full-name"
              placeholder="Enter your full name"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-sm"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="name@government.gov"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              className="w-full p-3 border border-gray-300 rounded-md text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600">Register</button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link>
          </p>
        </div>
        <footer className="mt-6 text-sm text-gray-500">
          <p>© 2026</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Protocol</a>
          </div>
          <span>V2.4.0-STABLE</span>
        </footer>
      </div>
    </div>
  );
};

export default RegistrationPage;