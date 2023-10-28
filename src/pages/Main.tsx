import React, { useEffect, useState } from 'react'
import '../assets/scss/pages/main.scss'
import PostList from 'components/template/PostList'
import { getLists } from 'api/ListApi'
import { mainState } from 'store/mainAtom' 
import { useRecoilState } from 'recoil'

const Main = () => {
  
  const [mainData, setMainData] = useRecoilState(mainState);

  useEffect(() => {
    getLists()
    .then(data => {
      setMainData(data);
      console.log(mainData)
    })
    .catch(error => {
      console.log("Error fetching token:", error)
    })
  }, []);

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
            <PostList mainData={mainData?.qna_data} />
          </div>
        </div>
        <div className="article__lists--right">
          <div className="inner">
            <PostList mainData={mainData?.community_data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
