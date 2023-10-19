import React from 'react'
import '../assets/scss/pages/main.scss'
import PostList from 'components/template/PostList'

const Main = () => {
  return (
    <>
      <div className='main__banner'>
        <a href="https://nhbank-recruit.com/" target="_blank" rel="noreferrer">
          <img src="/assets/okky-ban.png" alt="배너" />
        </a>
      </div>
      <div className="article__lists">
        <div className='article__lists--left'>
          <div className="inner">
            <PostList />
          </div>
        </div>
        <div className="article__lists--right">
          <div className="inner">
            <PostList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
