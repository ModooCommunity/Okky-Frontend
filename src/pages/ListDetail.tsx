import { useParams } from 'react-router-dom';
import Comment from '../components/template/Comment';

// interface Params {
//   id: string;
// }

const ListDetail = () => {

  // const { id } = useParams<Params>();
  // console.log(id)

  return (
    <div>
      <Comment />
    </div>
  )
}

export default ListDetail
