import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPinterest, faInstagram, faTiktok, faFacebook, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className = "footer">
      <div className = "footer-info">
        <div className = "snsWrap">
          <ul className = "sns">
            <li><FontAwesomeIcon icon={faInstagram} size = "1x"/><a href = "https://www.instagram.com/hm/"></a></li>
            <li><FontAwesomeIcon icon={faTiktok} size = "1x"/></li>
            <li><FontAwesomeIcon icon={faYoutube} size = "1x"/></li>
            <li><FontAwesomeIcon icon={faPinterest} size = "1x"/></li>
            <li><FontAwesomeIcon icon={faFacebook} size = "1x"/></li>
          </ul>
        </div>
        <span>
        이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H & M Hennes & Mauritz AB의 자산입니다. 더 보기 | 법인명 에이치앤엠헤네스 앤 모리츠 주식회사 | 통신판매업신고번호 :  2022-서울강남-01184 /  사업자등록|  번호: 220-87-83339 |  대표자: 아담 칼슨, 선 보라미, 아네타 포쿠친스카  서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호  080-822-0220 info.kr@hm.com 사업자 정보 확인 지급보증안내
        </span>
        <p>법인명 에이치앤엠헤네스앤모리츠 주식회사 | 통신판매업신고번호 : 2022-서울강남-01184 / 사업자등록번호: 220-87-83339 | 아담 칼슨, 선 보라미, 아네타 포쿠친스카 |</p>
        <p>서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220 | info.kr@hm.com</p>
        <span>사업자 정보 확인</span>
        <span>지급보증안내</span>
        <div className = "footer-icon">
            <img width ={38} src = "./img/logo.svg"></img></div>
        <div>대한민국 | ₩</div>
      </div>
    </div>
  )
}

export default Footer
