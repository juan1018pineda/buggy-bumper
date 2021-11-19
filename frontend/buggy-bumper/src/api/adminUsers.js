import { API_URL } from "../constants";
import axios from "axios";

export const checkLogin = async (login) => {
  const endpoint = "/users/login";
  const response = await axios.post(`${API_URL}${endpoint}`, login);
  alert(response.data);
};
