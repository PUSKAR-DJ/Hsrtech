// Centralized runtime/build-time configuration.
// Use Vite environment variable VITE_API_URL to override the default backend URL.
// Example: VITE_API_URL=https://api.example.com

export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:4500';
