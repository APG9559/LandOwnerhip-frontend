import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../api/authApi';
import type { ApiError } from '../api/authApi';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    try {
      await loginUser({ email, password });
      navigate('/dashboard');
    } catch (err) {
      const apiErr = err as ApiError;
      setErrorMessage(apiErr.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Land Ownership Information System</h1>
          <p className="text-gray-600">OFFICIAL REGISTRY PORTAL</p>
        </div>

        <form className="text-left" onSubmit={handleLogin} noValidate>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Sign In</h2>
          <p className="text-gray-500 mb-6">Enter your credentials to access the registry</p>

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-300 rounded-md text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="name@government.gov"
              required
              disabled={isLoading}
              className="w-full p-3 border border-gray-300 rounded-md text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              required
              disabled={isLoading}
              className="w-full p-3 border border-gray-300 rounded-md text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-6 flex items-center">
            <input type="checkbox" id="keep-signed-in" className="mr-2" />
            <label htmlFor="keep-signed-in" className="text-sm text-gray-700">
              Keep me signed in on this device
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-500 text-white py-2 px-4 rounded-md w-full hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Signing in…
              </>
            ) : (
              'Sign In to Dashboard'
            )}
          </button>

          <div className="mt-4 text-center">
            <a href="#" className="text-blue-500 text-sm hover:underline">Forgot password?</a>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-500 hover:underline">Register here</Link>
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