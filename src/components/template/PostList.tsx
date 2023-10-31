import { CategoryData, cateDataI, mainDataI } from 'store/mainAtom' 
import { Link } from 'react-router-dom';

interface PostListProps {
  categoryData: CategoryData[];
}

const PostList: React.FC<PostListProps> = ({categoryData}) => {

  if (!categoryData) {
    return null;
  }

  return (
    <div className="post__lists">
      {categoryData.map(item => (
        <Link to={`/${item.category}/${item.id}`} className="post__item px-20" key={item.id}>
        <div className="inner">
          <div className='user-area'>
            <p className="nickname">{item.nickname}</p>
            <p className="date">{item.createdAt ? item.createdAt.toString() : 'Unknown Date'}</p>
          </div>
          <div className="info-area">
            <p className="review">댓글수 : {item.commentCount}</p>
            <p className="review">조회수 : {item.viewCount}</p>
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
