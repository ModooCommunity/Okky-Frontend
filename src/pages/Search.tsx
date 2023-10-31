import axios from 'axios';
import PostList from 'components/template/PostList';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CategoryData } from 'store/mainAtom'; // mainAtom 파일의 경로에 따라 수정해주세요.

const Search = () => {

  const apiURL = 'https://724c-14-38-157-83.ngrok-free.app'
  const [searchResult, setSearchResult] = useState<CategoryData[]>([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get("title");
  const content = params.get("content");
  const keyword = params.get("keyword");

  console.log(title, content, keyword)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (title) {
          response = await axios.get(`${apiURL}/search?title=${title}`, {
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': '69420',
            }
          });
          console.log(response.data);
        } else if (content) {
          response = await axios.get(`${apiURL}/search?content=${content}`, {
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': '69420',
            }
          });
          console.log(response.data);
        } else if (keyword) {
          response = await axios.get(`${apiURL}/search?keyword=${keyword}`, {
            headers: {
              'Content-Type': 'application/json',
              'ngrok-skip-browser-warning': '69420',
            }
          });
          console.log(response.data);
        } else {
          response = await axios.get(`${apiURL}/search`, {    headers: {
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': '69420',
          }});
          console.log(response.data);
        }
        setSearchResult(response.data.searchData);
      } catch (error) {
        console.log("Error fetching token:", error);
      }
    };

    fetchData();
  }, [title, content, keyword]);

  return (
    <div>
      <PostList categoryData={searchResult}/> 
    </div>
  );
}

export default Search;

// 쌍따옴표 없애기!!!
