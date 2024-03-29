import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart } from '@fortawesome/free-regular-svg-icons'
import {faBagShopping, faSearch, faBars} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'
import {useState} from 'react'

const Header = ({authenticate, setAuthenticate, sidebar, setSidebar}) => {
    const menuList = ['Women', 'Men', 'Baby', 'Kids','H&M HOME', 'Sport', 'Sale', '지속가능성']
    const navigate = useNavigate()
    const showBars = () => {
        setSidebar(sidebar === true ? false : true)
        console.log("사이드바", sidebar);
    }
    const goToLogin = () => {
        if (authenticate === false) { //로그인 안했으면 로그인 창으로
            navigate('/login')
        }
        
        else { //로그인했는데 상단 로그인 버튼을 클릭한 경우 -> 로그아웃 (홈 화면으로)
            setAuthenticate(false)
            navigate('/')
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

    <div className = "hamburger" onClick = {showBars}>
        <FontAwesomeIcon icon={faBars} size = "2x"/>
    </div>

    <div className = "logo">
        <img onClick = {goToHome} width = {60.62} src = "./img/logo.svg"/>
    </div>

    <div className="user-info">
        <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} size="2x"/>
            <div>{authenticate?"로그아웃":"로그인"}</div>
        </div>
        <div className = "likes">
            <FontAwesomeIcon icon={faHeart} size="2x"/>
            <div>즐겨찾기</div>
        </div>
        <div className = "shopping-bag">
            <FontAwesomeIcon icon={faBagShopping} size="2x"/>
            <div>쇼핑하기</div>
        </div>
        <div className = "search-icon" onClick={showBars}>
            <FontAwesomeIcon icon={faSearch} size = "2x"/>
        </div>
    </div>

    </div>
  )
}

export default Header
