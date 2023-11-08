import PostList from 'components/template/PostList';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CategoryData } from 'store/mainAtom'; // mainAtom 파일의 경로에 따라 수정해주세요.
import { getSearchData } from '../api/ListApi';

const Search = () => {

  const [searchResult, setSearchResult] = useState<CategoryData[]>([]);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get("title")?.replace(/"/g, "");
  const content = params.get("content")?.replace(/"/g, "");
  const keyword = params.get("keyword")?.replace(/"/g, "");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (title) {
          response = await getSearchData(`?title=${title}`);
          console.log(response);
        } else if (content) {
          response = await getSearchData(`?content=${content}`);
          console.log(response);
        } else if (keyword) {
          response = await getSearchData(`?keyword=${keyword}`);
          console.log(response);
        } else {
          response = await getSearchData('');
          console.log(response);
        }
        setSearchResult(response.searchData);
      } catch (error) {
        console.error("토큰을 가져오는 중 오류 발생:", error);
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
