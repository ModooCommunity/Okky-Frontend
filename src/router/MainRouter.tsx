import KakaoRedirectPage from 'pages/KakaoRedirectPage'
import ListDetail from 'pages/ListDetail'
import ListPage from 'pages/ListPage'
import ListWrite from 'pages/ListWrite'
import Login from 'pages/Login'
import Main from 'pages/Main'
import Search from 'pages/Search'
import { Route, Routes } from 'react-router-dom'

const MainRouter = () => {
  return (
    <>
      <main className='container' style={{marginTop:50}}>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/:category" element={<ListPage />} />
          <Route path="/:category/new" element={<ListWrite />}/> 
          <Route path="/:category/:id" element={<ListDetail />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/oauth/callback/kakao" element={<KakaoRedirectPage />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default MainRouter
