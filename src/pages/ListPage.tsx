import PostList from 'components/template/PostList'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'styles/Button'
import '../assets/scss/pages/lists.scss'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cateDataI, mainDataI, mainSelector, mainState } from 'store/mainAtom'
import { useEffect, useState } from 'react'
import { getCategories } from 'api/ListApi'

const ListPage = () => {

  const navigate = useNavigate();
  const Lists = useRecoilValue(mainSelector);
  const location = useLocation();

  const [categories, setCategories] = useState<mainDataI['qna_data' | 'community_data']>();

  useEffect(() => {
    getCategories('question')
      .then(data => {
        setCategories(data);
        console.log(data); // 수정된 부분: categories 대신 data 사용
      })
      .catch(error => {
        console.log("Error fetching token:", error);
      });
  }, []);

  // const filteredData = location.pathname === '/main/question'
  // ? Lists.qna_data
  // : location.pathname === '/main/community'
  // ? Lists.community_data
  // : null;

  return (
    <>
     <Button onClick={() => { navigate(`/question/new`)}}>질문하기</Button>
      <PostList mainData={categories} />
    </>
  )
}

export default ListPage
