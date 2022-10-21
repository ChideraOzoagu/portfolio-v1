import React, { useRef } from "react";
import { FaHtml5, FaCss3, FaSass, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import codeImg from "../assets/JavaScript code.jpg";
import {delay, motion} from 'framer-motion'

const About = () => {
  const container = {
    offscreen: {
      opacity: 0,
      y: 50,
    },
    onscreen:{
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        
      }
    }
  }
  const technologiesList = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0,
    
    }
  }
  return (
    <section className="about-me" id='about'>
      <h2>About me</h2>
      <motion.article
    
      >
        <motion.div
        varaints={container}
        >
          
          <motion.p 
          variants={container}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{once: true, amount: 0.5}}
          >
            Hello! My name is Chidera and I enjoy creating things for the web. Started my journey as a frontend developer in February 2022 due to my curiosity to find out how the web generally worked.
            
          </motion.p>
          <motion.p
          variants={container}
          initial='offscreen'
        whileInView='onscreen'
        viewport={{once: true, amount: 0.5}}
          >
            qui laborum distinctio ipsam illum autem! Nobis autem quasi
            laudantium repellendus provident suscipit nostrum laborum impedit
            obcadem quo.
          </motion.p>
          <motion.p
          variants={container}
          initial='offscreen'
        whileInView='onscreen'
        viewport={{once: true, amount: 0.5}}
          >
            Here are some of the languages and technologies I have been working with:
          </motion.p>
          <motion.ul
          variants={technologiesList}
          initial='hidden'
          whileInView='show'
          viewport={{once: true, amount: 0.8}}
          >
            <motion.li
            variants={item}
            >
              <FaHtml5 />
            </motion.li>
            <motion.li
            variants={item}
            >
              <FaCss3 />
            </motion.li>
            <motion.li
            variants={item}
            >
              <SiTailwindcss />
            </motion.li>
            <motion.li
            variants={item}
            >
              <FaSass />
            </motion.li>
            <motion.li
            variants={item}
            >
              <SiJavascript />
            </motion.li>
            <motion.li
            variants={item}
            >
              <FaReact />
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.img initial={{ opacity: 0, }} whileInView= {{ opacity: 1, }} transition={{ease: "easeIn"}} viewport={{once: true, amount: 0.5}}
 src={codeImg} alt="chidera"  className="avatar"/>
      </motion.article>
    </section>
  );
};

export default About;
