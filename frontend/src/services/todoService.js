import axios from 'axios';

const API_URL = '/api/todos';

export const getAllTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTodo = async (title) => {
  const response = await axios.post(API_URL, { title });
  return response.data;
};

export const updateTodo = async (id, data) => {
  const response = await axios.put(`${API_URL}/${id}`, data);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
