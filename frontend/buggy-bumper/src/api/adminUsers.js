import { API_URL } from "../constants";
import axios from "axios";

export const checkLogin = async (login) => {
  const endpoint = "/users/login";
  const response = await axios.post(`${API_URL}${endpoint}`, login);
  if (response.data.message) {
    alert(response.data.message);
  } else {
    alert(response.data);
  }
};
