import { useState } from "react";
import "./styles/index.scss";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects/>
    </div>
  );
}

export default App;
