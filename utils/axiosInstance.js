import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Laravel backend URL
});

api.interceptors.request.use(
  (config) => {
    // const token = localStorage.getItem('token'); // Retrieve the token
    const token = "ereqweqewew";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
