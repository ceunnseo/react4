import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {useNavigate } from 'react-router-dom'
const Navbar = () => {
    const menuList = ['Women', 'Men', 'Baby', 'Kids','H&M HOME', 'Sport', 'Sale', '지속가능성']
    const navigate = useNavigate()
    const search = (event) => {
      //입력한 검색어를 읽어와서 url의 쿼리를 바꿔준다. (q=키워드)
      if (event.key === "Enter") {
        let keyword = event.target.value;
        navigate(`/?q=${keyword}`)
      }
    }
    return (
    <div>
      <div className = "menu-area">
        <ul className="menu-list">
        {menuList.map((item) => (
            <li key = {item}><span>{item}</span></li>
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
