import React from 'react'
import {useNavigate} from "react-router-dom"


const MainContent = () => {
  const navigate = useNavigate()
  const goProductAll = () => {
    navigate('/product#product-one-img')
  }
  return (
    <div className = "mainContent">
        <div id="main-desc">회원 혜택:3만원 이상 무료배송 & 첫구매 10% 할인</div>
        <div className = "main-product-wrap">
          <div className = "main-product-img">
            <img src ='./img/mainPic1.jpg' onClick = {goProductAll}></img>
          </div>
          <h2 className = "main-product-text">
            S/S 2024
          </h2>
          <button className = "main-product-button" onClick = {goProductAll}>
            지금 쇼핑하기
          </button>
        </div>
        <div id = "main-banner">
          <h3>지금 회원가입하세요</h3>
          <p>
          {`3만원 이상 무료배송\n첫 구매 10% 할인까지`}
          </p>
          <div className = "join-btn">
            <button>지금 가입하기</button>
            <button>회원 혜택 살펴보기</button>
          </div>
        </div>
    </div>
  )
}

export default MainContent
