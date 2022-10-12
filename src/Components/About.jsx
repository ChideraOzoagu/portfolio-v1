import React from "react";
import { FaHtml5, FaCss3, FaSass, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import codeImg from "../assets/JavaScript code.jpg";

const About = () => {
  return (
    <section className="about-me">
      <h2>About me</h2>
      <article>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi
            architecto amet molestiae voluptas repellendus officia natus.
            Voluptatem itaque aut veniam reiciendis placeat natus consectetur
            possimus sed corporis obcaecati esse doloribus nihil quam expedita
            adipisci dolores error ut nemo, consequuntur vel dolore explicabo
            enim. Nulla molestias commodi laudantium expedita sint quis porro
            hic deserunt consectetur minima exercitationem consequuntur sunt
            delectus fugiat deleniti perferendis, assumenda architecto cumque
          </p>
          <p>
            qui laborum distinctio ipsam illum autem! Nobis autem quasi
            laudantium repellendus provident suscipit nostrum laborum impedit
            obcaecati dolorem. Id, soluta amet quibusdam eligendi quis rem alias
            sint quam consectetur maiores fugiat facilis doloribus quidem quo.
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
        <div className="img-container">
          <img src={codeImg} alt="chidera" />
        </div>
      </article>
    </section>
  );
};

export default About;
