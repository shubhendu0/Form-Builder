import axios from "axios";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/data/`;


const addForm = async (data) => {
  const response = await axios.post(API_URL + "addForm", data);
  return response.data;
}

const getForms = async () => {
  const response = await axios.get(API_URL + "forms");
  return response.data;
}


const getForm = async (id) => {
  const response = await axios.get(`${API_URL}form/${id}`);
  return response.data;
}

const updateForm = async (data) => {
  const response = await axios.put(`${API_URL}updateForm/${data.id}`, data.newData);
  return response.data;
}

const deleteForm = async (id) => {
  const response = await axios.delete(`${API_URL}deleteForm/${id}`);
  return response.data;
}


const addAnswer = async (data) => {
  const response = await axios.post(API_URL + "addAnswer", data);
  return response.data;
}

const getAnswers = async (id) => {
  const response = await axios.get(`${API_URL}answers/${id}`);
  return response.data;
}

const updateAnswer = async (data) => {
  const response = await axios.put(`${API_URL}updateAnswer/${data.id}`, data.newData);
  return response.data;
}

const deleteAnswer = async (id) => {
  const response = await axios.delete(`${API_URL}deleteAnswer/${id}`);
  return response.data;
}


const dataService = {
  addForm,
  getForms,
  getForm,
  updateForm,
  deleteForm,
  addAnswer,
  getAnswers,
  updateAnswer,
  deleteAnswer
}

export default dataService;