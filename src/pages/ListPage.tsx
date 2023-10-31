import PostList from 'components/template/PostList'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'styles/Button'
import '../assets/scss/pages/lists.scss'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Categories, cateDataI, cateState, mainDataI, mainSelector, mainState } from 'store/mainAtom'
import { useEffect, useState } from 'react'
import { getCategories, getLists } from 'api/ListApi'

const ListPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [cateData, setCateData] = useRecoilState(cateState);

  console.log(location.pathname)

  const pathname = location.pathname === '/main/community' ? 'community' : location.pathname === '/main/question' ? 'question' : '';

  console.log(pathname)

  // useEffect(() => {
  //   getCategories(Categories.question)
  //   .then(data => {
  //     console.log(Categories.question)
  //     setCateData([data]);
  //     console.log(cateData)
  //   })
  //   .catch(error => {
  //     console.log("Error fetching token:", error)
  //   })
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategories(pathname);
        setCateData(data);
        console.log(cateData);
        // console.log(cateData);
      } catch (error) {
        console.log("Error fetching token:", error);
      }
    };

    fetchData();
  }, [setCateData, pathname]);

  return (
    <>
     <Button onClick={() => { navigate(`/question/new`)}}>질문하기</Button>
     {cateData.qnaData && <PostList categoryData={cateData.qnaData} />}
     {cateData.communityData && <PostList categoryData={cateData.communityData} />}
    </>
  )
}

export default ListPage
