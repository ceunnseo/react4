import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart } from '@fortawesome/free-regular-svg-icons'
import {faBagShopping, faC} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const goToLogin = () => {
        navigate('/login')
      }
    const goToHome = () => {
        navigate('/')
    }
  return (
    <div className = "header">
        <div className = "service">
            <div>고객 서비스</div>
            <div>뉴스레터</div>
            <div>매장 찾기</div>
            <div> ... </div>
        </div>

    <div className = "logo">
        <img onClick = {goToHome} width = {60.62} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzqGVNfEYRlJ-ySaX5CAXDJbJOY_oOI6KGHKSL0qWnw&s"/>
    </div>

    <div className="user-info">
        <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>내 계정</div>
        </div>
        <div className = "likes">
            <FontAwesomeIcon icon={faHeart} />
            즐겨찾기
        </div>
        <div className = "shopping-bag">
            <FontAwesomeIcon icon={faBagShopping}/>
            쇼핑하기
        </div>
    </div>

    </div>
  )
}

export default Header
