import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faHeart } from '@fortawesome/free-regular-svg-icons'
import {faBagShopping, faSearch, faBars} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'
import {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"

const Header = ({sidebar, setSidebar}) => {
    const menuList = ['Women', 'Men', 'Baby', 'Kids','H&M HOME', 'Sport', 'Sale', '지속가능성']
    const authenticate = useSelector(state=>state.auth.authenticate)
    const dispatch = useDispatch();
    console.log("header", authenticate);
    const navigate = useNavigate()
    const showBars = () => {
        setSidebar(true)
    }
    const goToLogin = () => {
        if (authenticate === false) { //로그인 안했으면 로그인 창으로
            navigate('/login')
        }
        else { //로그인했는데 상단 로그인 버튼을 클릭한 경우 -> 로그아웃 (홈 화면으로)
            //state의 authenticate 값을 true 바꿔줘야 한다.
            dispatch({type : "LOGOUT"})
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
            <FontAwesomeIcon className = "login-button-icon" icon={faUser} size="2x"/>
            <div>{authenticate?"로그아웃":"로그인"}</div>
        </div>
        <div className = "likes">
            <FontAwesomeIcon className = "login-button-icon" icon={faHeart} size="2x"/>
            <div>즐겨찾기</div>
        </div>
        <div className = "shopping-bag">
            <FontAwesomeIcon className = "login-button-icon" icon={faBagShopping} size="2x"/>
            <div>쇼핑하기</div>
        </div>
        <div className = "search-icon" onClick={showBars}>
            <FontAwesomeIcon className = "login-button-icon" icon={faSearch} size = "2x"/>
        </div>
    </div>

    </div>
  )
}

export default Header
