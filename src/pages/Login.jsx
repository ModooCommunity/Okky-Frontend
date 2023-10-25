
const Login = () => {
  const { REACT_APP_CLIENT_ID } = process.env;

    const REST_API_KEY = REACT_APP_CLIENT_ID;

    const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';
    
    const KAKAO_OAUTH_ACCESS_TOKEN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const handleButtonClick = () => {
        window.location.href = KAKAO_OAUTH_ACCESS_TOKEN_URL;
    };

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <button
                onClick={handleButtonClick}
                style={{padding: '10px 20px', fontSize: '18px', borderRadius: '5px', cursor: 'pointer'}}
            >
               카카오톡 로그인
            </button>
        </div>
    );
}

export default Login
