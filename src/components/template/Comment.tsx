import { FaEllipsisV, FaEraser, FaGrinBeam, FaPencilAlt } from "react-icons/fa";
import '../../assets/scss/components/comment.scss';
import { Button } from "styles/Button";
import { useState } from "react";

const Comment = () => {

  const [isActive, setIsActive] = useState(false);

  const SendComment = () => {
    console.log('a')
  }

  return (
    <>
      <div className="comment__wrap">
        <div className="profile">
          <FaGrinBeam />
        </div>
        <input type="text" />
      </div>
      <div className="btn__wrap">
        <Button onClick={() => SendComment()}>답변 쓰기</Button>
      </div>
      {/* 출력되는 내용 */}
      <div className="comment__wrap">
        <div className="profile">
          <FaGrinBeam />
        </div>
        <p className="comment">출력되는 내용 출력되는 내용 출력되는 내용 출력되는 내용 출력되는 내용 출력되는 내용 출력되는 내용 출력되는 내용 출력되는 내용 출력되는 내용</p> 
        <div className="edit-btn">
          <button onClick={() => setIsActive(prev => !prev)}>
            <FaEllipsisV />
          </button>
          {isActive && (
              <ul className="list-wrap">
                <li className="lists">
                  <FaPencilAlt />
                  수정하기
                </li>
                <li className="lists">
                  <FaEraser />
                  삭제하기
                </li>
              </ul>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Comment
