import React, { useState } from "react";

import Sidebar from "./Sidebar";

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <header>
      <div className="name">
        <h1>
          Chidera<span>Ozoagu</span>
        </h1>
        <button className={` ${navbar?'slide':''} nav-btn`} onClick={()=>setNavbar(!navbar)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
        <Sidebar navbar={navbar}/>
      
    </header>
  );
};

export default Header;
