import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL + "/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const login = async (user) => {
  try {
    const response = await axios.post(`${API_URL}login`, user);
    if (response.data?.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return { success: true, data: response.data };
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

const authService = { register, logout, login };
export default authService;
