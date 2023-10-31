import { Link } from 'react-router-dom'
import '../../assets/scss/components/header.scss'
import SearchInput from 'components/template/SearchInput'

const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__menu">
          <div className='logo'>
            <Link to={`/main`}>
              <img src="/assets/okky-munchkin-logo.png" alt="로고" />
            </Link>  
          </div>
          <ul className='menu-list'>
            <li className='list'>
              <Link to={`/main/community`}>커뮤니티</Link>  
            </li>  
            <li className='list'>
              <Link to={`/main/question`}>Qna</Link>  
            </li> 
          </ul>
        </div> 
        <ul className='header__util'>
          <SearchInput />
          <li className='login-btn'>
            <Link to={`/login`}>로그인</Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
