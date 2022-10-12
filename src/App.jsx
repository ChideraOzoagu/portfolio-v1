import { useState } from "react";
import "./styles/index.scss";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Header />
      <Home />
     <About/>
    </div>
  );
}

export default App;
