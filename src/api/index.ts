// src/api/users.ts
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/users?limit=9';

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};