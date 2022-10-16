import React from 'react'
import codeImg from "../assets/JavaScript code.jpg";

const Home = () => {
  return (
    <main className="home" id='home'>
    <div>
      <p className='small-text'>Hi there!<span> &#128075;</span></p>
      <p className='main-text'>My name is <span>Chidera Ozoagu</span> </p>
      <p className="medium-text">I build interactive User Interfaces on the Web</p>
      <p className='text-normal'>I am a Frontend Developer focused on building responsive and interactive components on the web using modern technologies like React JS, SASS and Tailwind css.</p>
    </div>
    <img src={codeImg} alt="laptop"  className="laptop"/>
</main>
  )
}

export default Home
