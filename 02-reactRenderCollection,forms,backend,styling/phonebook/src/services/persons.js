import axios from "axios";
const url = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(url);
  return request.then((response) => response.data);
};

const create = (personObject) => {
  return axios.post(url, personObject).then((response) => response.data);
};

const remove = (personID) => {
  return axios.delete(`${url}/${personID}`);
};

const update = (personID, personObject) => {
  return axios
    .put(`${url}/${personID}`, personObject)
    .then((response) => response.data);
};

export default { getAll, create, remove, update };
