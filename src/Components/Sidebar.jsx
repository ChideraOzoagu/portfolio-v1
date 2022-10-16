import React, { useRef } from 'react'

const Sidebar = ({navbar, navLinks, handleScroll}) => {
  
  return (
    <nav className={`${navbar? 'show-navbar':''}`}>
        <div className={`nav-container`}>
          {
            navLinks.map((nav, index)=>{
              const {icon, text, link} = nav 
              return <ul key={index}>
                 <li>
                  {icon}
                  <a href={link} onClick={handleScroll}>{text}</a>
                 </li>
              </ul>
            })
          }
          <button>
            Resume
          </button>
        </div>
      </nav>
  )
}

export default Sidebar
