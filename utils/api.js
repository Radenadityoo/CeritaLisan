import axios from 'axios';

const API_URL = 'https://682b5617d29df7a95be30583.mockapi.io/api/cerita';

export const getCerita = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const postCerita = async (newCerita) => {
  const res = await axios.post(API_URL, newCerita);
  return res.data;
};

export const putCerita = async (id, updatedCerita) => {
  const res = await axios.put(`${API_URL}/${id}`, updatedCerita);
  return res.data;
};

export const deleteCerita = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
