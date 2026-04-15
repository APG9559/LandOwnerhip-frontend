import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

// Shared axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ─── Interfaces ──────────────────────────────────────────────────────────────

export interface ApiError {
  message: string;
  statusCode?: number;
}

export interface RegisterPayload {
  full_name: string;
  username: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  user?: {
    id: string;
    username: string;
    email: string;
  };
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  accessToken: string;
  user?: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Extracts a normalised ApiError from an axios error so callers
 * don't need to import axios themselves.
 */
function toApiError(err: unknown, fallback: string): ApiError {
  if (axios.isAxiosError(err)) {
    return {
      message: err.response?.data?.message ?? fallback,
      statusCode: err.response?.status,
    };
  }
  return { message: fallback };
}

// ─── Auth API calls ───────────────────────────────────────────────────────────

export async function registerUser(payload: RegisterPayload): Promise<RegisterResponse> {
  try {
    const { data } = await api.post<RegisterResponse>('/auth/register', payload);
    return data;
  } catch (err) {
    throw toApiError(err, 'Registration failed. Please try again.');
  }
}

export async function loginUser(payload: LoginPayload): Promise<LoginResponse> {
  try {
    const { data } = await api.post<LoginResponse>('/auth/login', payload);

    if (data.accessToken) {
      localStorage.setItem('accessToken', data.accessToken);
    }

    return data;
  } catch (err) {
    throw toApiError(err, 'Login failed. Please check your credentials.');
  }
}
