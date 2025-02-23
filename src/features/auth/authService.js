import axios from "axios";

const API_URL = "/api/users/";

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
      localStorage.setItem("user", JSON.stringify(response.data)); // Store the entire response
      // localStorage.setItem("user", response.data); // Store only token
    }

    return { success: true, data: response.data }; // Return a consistent object
  } catch (error) {
    throw new Error(error.response?.data?.message || "Something went wrong");
  }
};

const authService = { register, logout, login };
export default authService;
