import Chat from 'pages/Chat'
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
          <Route path="/question/new" element={<ListWrite />}/> 
          <Route path="/question/:id" element={<ListDetail />}/>
          <Route path="/search" element={<Search />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/oauth/callback/kakao" element={<KakaoRedirectPage />}></Route>
          <Route path="/chat" element={<Chat />}/>
        </Routes>
      </main>
    </>
  )
}

export default MainRouter
