import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../api/authApi';
import type { ApiError } from '../api/authApi';

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const [full_name, setFull_name] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = (): string => {
    if (!full_name.trim()) return 'Full name is required.';
    if (!username.trim()) return 'Username is required.';
    if (username.length < 3) return 'Username must be at least 3 characters.';
    if (!email.trim()) return 'Email address is required.';
    if (password.length < 8) return 'Password must be at least 8 characters.';
    if (password !== confirmPassword) return 'Passwords do not match.';
    return '';
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsLoading(true);
    try {
      const response = await registerUser({ full_name, username, email, password });
      setSuccessMessage(response.message || 'Registration successful! Redirecting to login…');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      const apiErr = err as ApiError;
      setErrorMessage(apiErr.message || 'Registration failed. Please try again.');
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

        <form className="text-left" onSubmit={handleRegister} noValidate>
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Register</h2>
          <p className="text-gray-500 mb-6">Create your account to access the registry</p>

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-50 border border-red-300 rounded-md text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          {/* Success Banner */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-50 border border-green-300 rounded-md text-sm text-green-700">
              {successMessage}
            </div>
          )}

          <div className="mb-4">
            <label htmlFor="full-name" className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="Enter your full name"
              required
              disabled={isLoading}
              className="w-full p-3 border border-gray-300 rounded-md text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
              value={full_name}
              onChange={(e) => setFull_name(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              disabled={isLoading}
              className="w-full p-3 border border-gray-300 rounded-md text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

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
            <p className="mt-1 text-xs text-gray-400">Minimum 8 characters.</p>
          </div>

          <div className="mb-6">
            <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="••••••••"
              required
              disabled={isLoading}
              className="w-full p-3 border border-gray-300 rounded-md text-sm disabled:bg-gray-50 disabled:cursor-not-allowed"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
                Registering…
              </>
            ) : (
              'Register'
            )}
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
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