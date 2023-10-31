import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export const requestGetCustomers = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
};

export const requestPostCustomers = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestPutCustomer = async (endpoint,body) => {
  const { data } = await api.put(endpoint, body);

  return data;
};

export const requestRemoveCustomer = async (endpoint) => {
  const { data } = await api.delete(endpoint);
  return data;
};