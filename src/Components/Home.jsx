import React from "react";
import codeImg from "../assets/JavaScript code.jpg";
import {motion} from 'framer-motion'

const Home = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0,
    
    }
  }
  return (
    <main  className="home" id="home">
      <motion.div
      variants={container}
      initial= 'hidden'
      animate = 'show'
      >
        <motion.p className="small-text" variants={item}>
          Hi there!<span> &#128075;</span>
        </motion.p>
        <motion.p className="main-text" variants={item}>
          My name is <span>Chidera Ozoagu</span>
        </motion.p>
        <motion.p className="medium-text" variants={item}>
          I build interactive User Interfaces on the Web
        </motion.p>
        <motion.p className="text-normal" variants={item}>
          I am a Frontend Developer focused on building responsive and
          interactive components on the web using modern technologies like React
          JS, SASS and Tailwind css.
        </motion.p>
      </motion.div>
      <motion.img initial={{ opacity: 0}} animate= {{ opacity: 1}} transition={{ease: "easeIn"}} src={codeImg} alt="laptop" className="laptop" />
    </main>
  );
};

export default Home;
