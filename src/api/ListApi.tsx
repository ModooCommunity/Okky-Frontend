import axios from "axios";
import { cateDataI, mainDataI } from "store/mainAtom";

const apiURL = 'https://724c-14-38-157-83.ngrok-free.app'

export const getLists = async (): Promise<mainDataI> => {
  const response = await axios.get(`${apiURL}/main`, {     
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420',
    }
  });  
  console.log(response.data)
  return response.data;
}

export const getCategories = async (category: string): Promise<cateDataI> => {
  const response = await axios.get(`${apiURL}/main/${category}?page=1&size=10`, {
    headers: {
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': '69420',
    }
  });
  return response.data;
}

// https://724c-14-38-157-83.ngrok-free.app/main/community?page=1&size=10