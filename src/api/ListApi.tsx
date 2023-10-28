import axios from "axios";
import { mainDataI } from "store/mainAtom";

export const getLists = async (): Promise<mainDataI> => {
  const response = await axios.get("http://localhost:4000/main");
  console.log(response.data)
  return response.data;
}

export const getCategories = async (category: string): Promise<mainDataI> => {
  const response = await axios.get(`http://localhost:4000/main/${category}`);
  return response.data;
}