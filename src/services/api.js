/**
 * API service with axios.
 * Set VITE_API_URL in .env (e.g. http://localhost:5000) to point to your backend.
 */
import axios from "axios";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

export const api = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    if (import.meta.env.DEV) {
      console.log(`[API] ${config.method?.toUpperCase()} ${config.url}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    if (import.meta.env.DEV) {
      console.log(`[API] ${response.config.url} → ${response.status}`);
    }
    return response;
  },
  (error) => {
    const { response } = error;
    const data = response?.data ?? {};
    const message =
      data.message || data.error || data.msg || error.message || "Request failed";

    if (response?.status === 401) {
      localStorage.removeItem("token");
      const isAuthRequest = /\/auth\/(login|register)/.test(error.config?.url || "");
      if (!isAuthRequest && !window.location.pathname.includes("/login")) {
        window.location.href = "/login";
      }
    }

    const err = new Error(message);
    err.status = response?.status;
    err.data = data;
    err.isAxiosError = true;

    if (import.meta.env.DEV) {
      console.error(`[API] ${error.config?.url} → ${response?.status}`, message);
    }

    return Promise.reject(err);
  }
);

export const authApi = {
  /** Login. Expects backend: POST /api/auth/login { email, password } → { token, user: { id, email, name, role } } */
  login: (email, password) =>
    api
      .post("/api/auth/login", { email, password })
      .then((res) => {
        const { token, user } = res.data || {};
        if (token) localStorage.setItem("token", token);
        return res.data;
      }),

  /** Forgot password. Backend uses nodemailer to send reset link. */
  forgotPassword: (email) =>
    api.post("/api/auth/forgot-password", { email }).then((res) => res.data),

  /** Reset password with token from email link. Expects: POST /api/auth/reset-password { token, newPassword } */
  resetPassword: (token, newPassword) =>
    api
      .post("/api/auth/reset-password", { token, newPassword })
      .then((res) => res.data),
};

export const usersApi = {
  /** Create user (admin). Expects: POST /api/users { name, email, phone, role, status } */
  create: (data) => api.post("/api/users", data).then((res) => res.data),
};

export const contactApi = {
  /** Submit contact/inquiry form. Expects: POST /api/contact { firstName, lastName, email, phone, company, message } */
  submit: (data) => api.post("/api/contact", data).then((res) => res.data),
};
