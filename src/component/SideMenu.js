import React from 'react'

const SideMenu = ({sidebar, setSidebar}) => {
  const sidebarList = ['Sale', 'Women', 'Men', 'Baby', 'Kids', 'H&M HOME', 'Sport', '지속가능성']
  return (
    <div className = "side-menu" style = {{width : sidebar ? "250px" : "0px"}}>
      <button className = "closeBtn" onClick = {()=>{setSidebar(false);}}>&times;</button>
      <div className = "side-menu-list">
        {sidebarList.map((item) => <button>{item}</button>)}
      </div>
    </div>
  )
}

export default SideMenu
