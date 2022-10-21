import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const Contact = () => {
  return (
    <footer className='contact' id='contact'>
        <h2>Looking to get in touch with me?</h2>
        <a className='email' href="mailto:deraozoagu@gmail.com">start a conversation</a>
        <div className="socials">
            <a href="https://www.linkedin.com/in/chidera-ozoagu/"><FaLinkedin/></a>
            <a href="https://github.com/ChideraOzoagu"><FaGithub/></a>
            <a href="https://twitter.com/notchidera"><BsTwitter/></a>
        </div>
    </footer>
  )
}

export default Contact
