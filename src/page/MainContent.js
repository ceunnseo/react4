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
        <div>
          <img src ='./img/mainPic1.jpg' onClick = {goProductAll}></img>
        </div>
        <div>
          <img src ='./img/mainPic2.jpg' onClick = {goProductAll}></img>
        </div>
        <div id = "main-banner">
          <h3>지금 회원가입하세요</h3>
          <p>
          {`3만원 이상 무료배송\n첫 구매 10% 할인까지`}
          </p>
        </div>
    </div>
  )
}

export default MainContent
