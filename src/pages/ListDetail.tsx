import React, { useEffect, useState } from 'react'
import "../assets/scss/pages/detail.scss";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { questionGetData } from 'interfaces/ListData';
import EditModal from './EditModal';

const ListDetail = () => {

  const navigate = useNavigate();

  const { REACT_APP_SERVER_URL } = process.env;

  const { id } = useParams();

  const [ detailData, setDetailData ] = useState<questionGetData | null>({
    nickname: "",
    title: "",
    content: "",
    viewCount: 0,
    comments: [],
  });

  const [ modalOpen, setModalOpen ] = useState<boolean>(false);

  useEffect(() => {
    axios.get(`${REACT_APP_SERVER_URL}/question/${id}`)
    .then(response => {
      const boardData = response.data;
      setDetailData(boardData);
    })
  },[id]);

  const reloadDetailData = () => {
    axios.get(`${REACT_APP_SERVER_URL}/question/${id}`)
      .then(response => {
        const boardData = response.data;
        setDetailData(boardData);
      });
  };

  const handleModalClose = () => {
    setModalOpen(false);
    reloadDetailData();
  };
  
  const handleDelete = () => {
    const confirmDelete = window.confirm('정말로 이 항목을 삭제하시겠습니까?');
    if(confirmDelete){
      //확인을 누를 경우 삭제 요청
      const token = sessionStorage.getItem('accessToken');
      if(token){
        axios.delete(`${REACT_APP_SERVER_URL}/question/delete/${id}`, {
          headers: {
            Authorization: token
          }
        })
        .then(() => {
          navigate('/');
        });
      }else {
        alert('로그인이 필요해요');
      }
    }
  };

  return (
    <>
      <div className="detail-wrapper">
        <div className="detail-top">
          <div className="top-userinfo-area">
            <img src="https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/7r5X/image/9djEiPBPMLu_IvCYyvRPwmZkM1g.jpg" alt="카카오프로필이미지" />
            <span>글쓴이 : {detailData?.nickname}</span>
            <span>조회수 : {detailData?.viewCount}</span>
          </div>
          <div className="top-update-area">
            <button onClick={() => setModalOpen(true)}>수정</button>
            <button onClick={handleDelete}>삭제</button>
          </div>
        </div>

        <hr></hr>

        <div className="detail-middle">
          <h2>{detailData?.title}</h2>
          <p>{detailData?.content}</p>
        </div>

        <hr></hr>
          
        <div className="detail-bottom">
          <div className="detail-write-review">
            <div className="write-review-userinfo">

            </div>
            <input type='text' placeholder='댓글을 입력해주세요.'></input>
          </div>
          <button>댓글쓰기</button>
        </div>
      </div>

       {/* 모달 버튼 클릭 시 EditModal 컴포넌트를 렌더링 */}
       {modalOpen && <EditModal onClose={handleModalClose} />}
    </>
  )
}

export default ListDetail;
