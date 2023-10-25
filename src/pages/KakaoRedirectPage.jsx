import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

const KakaoRedirectPage = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const { REACT_APP_CLIENT_ID, REACT_APP_CLIENT_SECRET, REACT_APP_JAVASCRIPT_KEY } = process.env;

    
    const KAKAO_OAUTH_ID_TOKEN_URL = 'https://kauth.kakao.com/oauth/token';
    const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';

    const handleOAuthKakao = async (code) => {

        try {
        
            //카카오 인가 코드 요청
            const code = new URL(window.location.href).searchParams.get('code');
            //ID Token 받기 위한 payload
            const payload = qs.stringify({
                grant_type: 'authorization_code',
                client_id: REACT_APP_CLIENT_ID,
                redirect_uri: REDIRECT_URI,
                code: code,
                client_secret: REACT_APP_CLIENT_SECRET,
            });

            if(window.Kakao){
                if(!window.Kakao.isInitialized()){
                    window.Kakao.init(REACT_APP_JAVASCRIPT_KEY);
                }
            }
            
            //ID 토큰 요청
            const response = await axios.post(KAKAO_OAUTH_ID_TOKEN_URL, payload, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
                },
            });
            
            // window.Kakao.Auth.setAccessToken(response.data.access_token);
            const idToken = response.data.id_token;
            console.log("****되나요?****"+idToken);
    
            // idToken을 서버의 "localhost:8080/auth/login"에 요청
            const loginResponse = await axios.post('http://localhost:8080/auth/login', null, {
                headers: {
                    'Authorization': 'Bearer ' + idToken,
                },
                withCredentials: true,
            });
            navigate('/');
            // 객체 , 사용자의 nickname과 email을 담겨있음.
            return loginResponse;
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');  
        // 카카오는 Redirect 시키면서 code를 쿼리 스트링으로 준다.
        if (code) {
            handleOAuthKakao(code);
        }
    }, [window.Kakao]);

    return (
        <div>
            <div>로그인 성공</div>
        </div>
    );

}

export default KakaoRedirectPage