import React, { useEffect, useState } from 'react'
import "../assets/scss/pages/listwrite.scss"
import axios from 'axios'
import { questionPostData } from 'interfaces/ListData';
import { access } from 'fs';
import { useNavigate } from 'react-router-dom';

const ListWrite = () => {

  const navigate = useNavigate();

  const { REACT_APP_SERVER_URL } = process.env;
  
  const [questionFormData, setQuestionFormData] = useState<questionPostData>({
    topic: '토픽을 선택해주세요.',
    title: '',
    content: '',
  });

  const [questionId, setQuestionId] = useState<number>()

  const [accessToken, setAccessToken] = useState<string | null>('');

  //세션스토리지에 있는 accessToken 가져오기
  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    setAccessToken(token);
  },[]);

  const postQuestionDataToServer = async () => {
    try{
      const response = await axios.post(`${REACT_APP_SERVER_URL}/question/new`, questionFormData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': accessToken,
        },
      });
      if(response.status === 201){
        console.log(response.data);
        const id = response.data.id;

        navigate(`/question/${id}`);
      }
    }catch(e){
      console.log(e);
    }
  };

  // 입력 값 변경 핸들러
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setQuestionFormData({
      ...questionFormData,
      [name]: value,
    });
  };

  return (
    <>
      <div className='write-banner'>
        <div className="tit-wrapper">
          <div className='tit-head'>
            기술 궁금증 해결하기
          </div>
          <div className='tit-desc'>
            지식공유 플랫폼 OKKY에서 최고의 개발자들과 함께 궁금증을 해결하세요.
          </div>
        </div>
        <form className='form-area'>
          <div className="input-wrapper">
            <div className="input-choice">
              <div className="input-topic">
                <p>토픽</p>
                <select name='topic' id='categoryCode' value={questionFormData.topic} onChange={handleInputChange}>
                  <option>토픽을 선택해주세요.</option>
                  <option value='Question'>Question</option>
                  <option value='Community'>Community</option>
                </select>
              </div>
              <div className="input-title">
                <p>제목</p>
                <input type='text' name='title' value={questionFormData.title} onChange={handleInputChange}></input>
              </div>
              <div className="input-content">
                <p>내용</p>
                <input type='text' name='content' value={questionFormData.content} onChange={handleInputChange}></input>
              </div>
            </div>
            <div className="input-button">
              <div className="input-cancle">
                <button type='button'>취소</button>
              </div>
              <div className="input-register">
                <button type='button' onClick={postQuestionDataToServer}>등록</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ListWrite
