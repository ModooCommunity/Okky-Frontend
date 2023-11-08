import axios from "axios";
import { cateDataI, mainDataI } from "store/mainAtom";

// const apiURL = 'https://724c-14-38-157-83.ngrok-free.app'
const apiURL = 'http://localhost:4000'

export const getLists = async (): Promise<mainDataI> => {
  const response = await axios.get(`${apiURL}/main`, {     
    headers: {
      'Content-Type': 'application/json',
      // 'ngrok-skip-browser-warning': '69420',
    }
  });  
  console.log(response.data);
  return response.data;
}

export const getCategories = async (category: string): Promise<cateDataI> => {
  // const response = await axios.get(`${apiURL}/main/${category}`, {
  const response = await axios.get(`${apiURL}/${category}`, {
    headers: {
      'Content-Type': 'application/json',
      // 'ngrok-skip-browser-warning': '69420',
    }
  });
  console.log(response.data);
  return response.data;
}

// TODO: https://724c-14-38-157-83.ngrok-free.app/main/community?page=1&size=10

export const getSearchData = async (query: string) => {
  try {
    const response = await axios.get(`${apiURL}/search${query}`, {
      // headers: {
      //   'Content-Type': 'application/json',
      //   'ngrok-skip-browser-warning': '69420',
      // }
    });
    console.log('쿼리 : ', query);
    return response.data;
  } catch (error) {
    console.error("검색에러", error);
    throw error;
  }
};

// TODO: 검색에서 "" 붙는지 안붙는지 확인