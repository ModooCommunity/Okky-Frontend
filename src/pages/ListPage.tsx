import PostList from 'components/template/PostList'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'styles/Button'
import '../assets/scss/pages/lists.scss'

const ListPage = () => {

  const navigate = useNavigate();
  const { category } = useParams();

  return (
    <>
     <Button onClick={() => { navigate(`/${category}/new`)}}>질문하기</Button>
     <PostList />
    </>
  )
}

export default ListPage
