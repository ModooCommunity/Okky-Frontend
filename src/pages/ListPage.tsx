import PostList from 'components/template/PostList'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from 'styles/Button'
import '../assets/scss/pages/lists.scss'
import ListDetail from './ListDetail'
import ListWrite from './ListWrite'

const ListPage = () => {

  const navigate = useNavigate();

  return (
    <>
     <Button onClick={() => { navigate(`/question/new`)}}>질문하기</Button>
     <PostList />
    </>
  )
}

export default ListPage
