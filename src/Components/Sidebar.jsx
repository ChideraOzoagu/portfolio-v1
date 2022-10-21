import React, { useRef, useEffect } from 'react'


const Sidebar = ({navbar, navLinks, handleScroll, setNavbar}) => {

  return (
    <nav className={`${navbar? 'show-navbar':''}`}  >
        <div className={`nav-container`} >
          {
            navLinks.map((nav, index)=>{
              const {icon, text, link} = nav 
              return <ul key={index} >
                 <li>
                  {icon}
                  <a href={link} onClick={handleScroll}>{text}</a>
                 </li>
              </ul>
            })
          }
        
           <a href="src\assets\Chidera Resume.pdf" className='resume-btn' download>Resume</a>
        </div>
      </nav>
  )
}

export default Sidebar
