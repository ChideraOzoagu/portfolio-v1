import React from "react";
import { FaHtml5, FaCss3, FaSass, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import codeImg from "../assets/JavaScript code.jpg";

const About = () => {
  return (
    <section className="about-me" id='about'>
      <h2>About me</h2>
      <article>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            architecto amet molestiae voluptas repellendus officia natus.
            Voluptatem itaque aut veniam reiciendis placeat natus consectetur
           untur sunt
            delectus fugiat deleniti perferendis, assumenda architecto cumque
          </p>
          <p>
            qui laborum distinctio ipsam illum autem! Nobis autem quasi
            laudantium repellendus provident suscipit nostrum laborum impedit
            obcadem quo.
          </p>
          <p>
            Here are some of the languages and technologies I have been working with:
          </p>
          <ul>
            <li>
              <FaHtml5 />
            </li>
            <li>
              <FaCss3 />
            </li>
            <li>
              <SiTailwindcss />
            </li>
            <li>
              <FaSass />
            </li>
            <li>
              <SiJavascript />
            </li>
            <li>
              <FaReact />
            </li>
          </ul>
        </div>
        <img src={codeImg} alt="chidera"  className="avatar"/>
      </article>
    </section>
  );
};

export default About;
