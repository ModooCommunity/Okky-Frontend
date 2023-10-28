import { mainDataI } from 'store/mainAtom' 
import { Link } from 'react-router-dom';

interface PostListProps {
  mainData?: mainDataI['qna_data' | 'community_data']; // 또는 mainDataI['community_data']
}

const PostList: React.FC<PostListProps> = ({mainData}) => {

  if (!mainData) {
    return null;
  }

  return (
    <div className="post__lists">
      {mainData.map(item => (
        <Link to={`/${item.category}/${item.id}`} className="post__item px-20" key={item.id}>
        <div className="inner">
          <div className='user-area'>
            <p className="nickname">{item.nickname}</p>
            <p className="date">{item.created_at.toString()}</p>
          </div>
          <div className="info-area">
            <p className="review">댓글수 : {item.comment_count}</p>
            <p className="review">조회수 : {item.view_count}</p>
          </div>
        </div>
        <div className="title-area">
          <p className="title">{item.title}</p>
        </div>
    </Link>
      ))}

    </div>
  )
}

export default PostList
