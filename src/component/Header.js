import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart } from '@fortawesome/free-regular-svg-icons'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'

const Header = ({authenticate}) => {
    const navigate = useNavigate()
    const goToLogin = () => {
        if (authenticate === false) { //로그인 안했으면 로그인 창으로
            navigate('/login')
        }
        else { //로그인했는데 클릭한 경우

        }
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
        <img onClick = {goToHome} width = {60.62} src = "./img/logo.svg"/>
    </div>

    <div className="user-info">
        <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>{authenticate?"로그아웃":"로그인"}</div>
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
