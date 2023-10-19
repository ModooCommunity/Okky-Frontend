import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = () => {
  return (
    <Link to={`/category/id`} className="post__item">
        <div className="inner">
          <div className='user-area'>
            <p className="nickname">사용자이름</p>
            <p className="date">작성시간</p>
          </div>
          <div className="info-area">
            <p className="review">댓글수 : 5</p>
          </div>
        </div>
        <div className="title-area">
          <p className="title">제목 영역입니다</p>
        </div>
    </Link>
  )
}

export default PostItem
