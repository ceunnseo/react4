import React from 'react'

const MiniNavbar = () => {
    const mininavList = ['HM.com', 'S/S 2024', '모두보기']
  return (
    <div>
      <ul className = "mini-nav-list">
        {mininavList.map((item) => (
            <li key = {item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default MiniNavbar
