import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach stored JWT token to every request
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getStats = async () => {
  const res = await api.get('/dashboard/stats');
  return res.data;
};

export const getActivity = async () => {
  const res = await api.get('/dashboard/activity');
  return res.data;
};

export const getDeeds = async () => {
  const res = await api.get('/dashboard/deeds');
  return res.data;
};

export const getEncumbrances = async () => {
  const res = await api.get('/dashboard/encumbrances');
  return res.data;
};