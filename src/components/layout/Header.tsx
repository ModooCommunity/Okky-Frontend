import { Link } from 'react-router-dom'
import '../../assets/scss/components/header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__menu">
          <div className='logo'>
            <Link to={`/`}>
              <img src="/assets/okky-munchkin-logo.png" alt="로고" />
            </Link>  
          </div>
          <ul className='menu-list'>
            <li className='list'>
              <Link to={`/community`}>커뮤니티</Link>  
            </li>  
            <li className='list'>
              <Link to={`/question`}>Qna</Link>  
            </li> 
          </ul>
        </div> 
        <ul className='header__util'>
          <li>
            <input type="text" placeholder='검색영역' />
          </li>
          <li className='login-btn'>
            <Link to={`/login`}>로그인</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
