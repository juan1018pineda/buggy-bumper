import { API_URL } from "../constants";
import axios from "axios";

export const addCar = async (newCar) => {
  const endpoint = "/cars/create";
  const response = await axios.post(`${API_URL}${endpoint}`, newCar);
  if (response) {
    return response.data;
  } else {
    console.log(response);
  }
};
