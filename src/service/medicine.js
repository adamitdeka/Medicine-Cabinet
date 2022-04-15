import axios from "axios";

const API_KEY = "NpWzhMH09wZ1E6dqmdHRPuCgYXgt5INRyjQEiiQ1";
const URL = `https://api.fda.gov/drug/event.json?api_key=${API_KEY}&search=open_fda.route=oral&limit=10`;

export const getMedicine = () => {
  return axios.get(URL);
};
