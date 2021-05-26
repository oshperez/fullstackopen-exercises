import axios from "axios";

const baseUrl = "http://localhost:8000/persons";

const getPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const addPerson = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request.then((res) => res.data);
};

const deletePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
};

const updatePerson = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  return request.then((res) => res.data);
};

export default { getPersons, addPerson, deletePerson, updatePerson };
