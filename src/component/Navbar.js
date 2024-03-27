import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'
const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아','아동', 'H&M HOME', 'Sale', '지속가능성']
    const navigate = useNavigate()
    const goToLogin = () => {
      navigate('/login')
    }
    const search = (event) => {
      //입력한 검색어를 읽어와서 url의 쿼리를 바꿔준다. (q=키워드)
      if (event.key === "Enter") {
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`)
      }
    }
    return (
    <div>
      <div>
        <div className="login-button" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
        </div>
      </div>
      <div className = "nav-section">
        <img width = {50} src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCzqGVNfEYRlJ-ySaX5CAXDJbJOY_oOI6KGHKSL0qWnw&s"/>
      </div>
      <div className = "menu-area">
        <ul className="menu-list">
        {menuList.map((item) => (
            <li key = {item}>{item}</li>
        ))}
        </ul>
        <div className = "search-box">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder='제품검색' onKeyPress = {search}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
