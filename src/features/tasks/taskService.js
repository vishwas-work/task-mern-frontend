import axios from "axios";

const createTask = async (task, token) => {
  try {
    const API_URL = import.meta.env.VITE_API_URL + "api/tasks/";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    // debugger;
    const data = { task: task };
    const responce = await axios.post(API_URL, data, config);
    return responce.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const getTasks = async (token) => {
  try {
    const API_URL = import.meta.env.VITE_API_URL + "api/tasks/";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const responce = await axios.get(API_URL, config);
    return responce.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

const deleteTask = async (id, token) => {
  try {
    const API_URL = import.meta.env.VITE_API_URL + "api/tasks/";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Corrected axios.delete syntax
    const response = await axios.delete(`${API_URL}${id}`, config);
    // debugger;
    return response.data;
  } catch (error) {
    // Fixed error handling
    throw new Error(error.response?.data?.message || "Error deleting task");
  }
};

const taskService = {
  createTask,
  getTasks,
  deleteTask,
};
export default taskService;
