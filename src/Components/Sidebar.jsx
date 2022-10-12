import React from 'react'
import { FaQuestion } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";


const Sidebar = ({navbar}) => {
  return (
    <nav className={`${navbar? 'show-navbar':''}`}>
        <div className={`nav-container`}>
          <ul>
            <li>
              <BsFillTelephoneFill />
              <a href="">contact</a>
            </li>
            <li>
              <FaQuestion />
              <a href="">about me</a>
            </li>
            <li>
              <MdWork />
              <a href="">projects</a>
            </li>
          </ul>
          <button>
            Resume
          </button>
        </div>
      </nav>
  )
}

export default Sidebar
