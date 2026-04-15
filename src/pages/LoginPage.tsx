import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Land Ownership Information System</h1>
          <p className="text-gray-600">OFFICIAL REGISTRY PORTAL</p>
        </div>
        <form className="text-left" onSubmit={handleLogin}>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Sign In</h2>
          <p className="text-gray-500 mb-6">Enter your credentials to access the registry</p>
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
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="keep-signed-in" className="mr-2" />
            <label htmlFor="keep-signed-in" className="text-sm text-gray-700">Keep me signed in on this device</label>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600">Sign In to Dashboard</button>
          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don’t have an account? <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
          </p>
        </div>
        <div className="flex justify-between mt-6 text-sm text-gray-500">
          <a href="#" className="hover:underline">Help Desk</a>
          <a href="#" className="hover:underline">Security Policy</a>
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

export default LoginPage;