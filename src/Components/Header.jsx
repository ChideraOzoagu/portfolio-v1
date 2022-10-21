import React, { useState, useRef } from "react";
import Sidebar from "./Sidebar";
import { FaQuestion } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { motion } from "framer-motion"

const navLinks = [
  {
    icon: <BsFillTelephoneFill/>,
    text: 'contact',
    link: '#contact',
  },
  {
    icon: <FaQuestion/>,
    text: 'about',
    link: '#about',
  },
  {
    icon: <MdWork/>,
    text: 'projects',
    link: '#projects',
  },
]

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const nav = useRef()


  const handleScroll = (e)=>{
    e.preventDefault()
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    const navHeight = nav.current.getBoundingClientRect().height
    // box-shadow = 20px
    let position = element.offsetTop - navHeight - 20
    window.scrollTo({
      left: 0,
      top: position 
    })
    setNavbar(false)
  }
  return (
    <motion.header ref={nav}
     initial= {{opacity: 0, y: -50}}
     animate= {{opacity: 1, y: 0}}
     >
      <div className="name">
        <a href="#home">
          <h1>
            Chidera<span>Ozoagu</span>
          </h1>
        </a>
        <button className={` ${navbar?'slide':''} nav-btn`} onClick={()=>setNavbar(!navbar)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
        <Sidebar navbar={navbar} navLinks={navLinks} setNavbar={setNavbar} handleScroll={handleScroll}/>
      <motion.div className="nav-desktop"
      initial= {{opacity: 0, y: -50}}
     animate= {{opacity: 1, y: 0}}
      // transition = {{delay: 1.2}}
      >
        {navLinks.map((nav, index)=>{
          const {text, link} = nav
          return <a className="nav-links" href={link} key={index} onClick={handleScroll}
          >{text}</a>
        })}
        <a
        
        href="src\assets\Chidera Resume.pdf" className="resume-btn" download>Resume</a>
      </motion.div>
    </motion.header>
  );
};

export default Header;
