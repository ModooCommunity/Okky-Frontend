import React, { useRef, useState, useEffect } from 'react'
import "../assets/scss/pages/editmodal.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface EditModalProps {
  onClose: () => void;
}

const EditModal: React.FC<EditModalProps> = ({ onClose }) => {

  const [accessToken, setAccessToken] = useState<string | null>('');

  //세션스토리지에 있는 accessToken 가져오기
  useEffect(() => {
    const token = sessionStorage.getItem('accessToken');
    setAccessToken(token);
  },[]);

  const navigate = useNavigate();

  const { REACT_APP_SERVER_URL } = process.env;

  const modalBackground = useRef<HTMLDivElement | null>(null);
  const [ topic, setTopic ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');

  const { id } = useParams();

  const patchToServer = () => {
    const data = {
      topic: topic,
      title: title,
      content: content,
    };

    axios.patch(`${REACT_APP_SERVER_URL}/question/edit/${id}`, data, {
      headers: {
        'Authorization': `${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if(response.status === 200) {
          // navigate()
          onClose();
        }
      })
  };

  return (
    <div className={'modal-container'} ref={modalBackground} onClick={e => {
      if (e.target === modalBackground.current) {
        onClose(); // 모달 닫기
      }
    }}>
      <div className={'modal-content'}>
        <p>토픽</p>
        <select name='topic' id='categoryCode' onChange={(e) => setTopic(e.target.value)}>
          <option>토픽을 선택해주세요.</option>
          <option value='Question'>Question</option>
          <option value='Community'>Community</option>
        </select>
        <p>제목</p>
        <input type='text' name='title' onChange={(e) => setTitle(e.target.value)}></input>
        <p>내용</p>
        <input type='text' name='content' onChange={(e) => setContent(e.target.value)}></input>
      </div>
      <div className="btn-wrapper">
        <button onClick={patchToServer}>수정</button>
        <button className={'modal-close-btn'} onClick={onClose}>
          모달 닫기
        </button>
      </div>
    </div>
  );
}

export default EditModal;