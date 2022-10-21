import { useEffect, useState } from "react";
import "./styles/index.scss";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ClipLoader from "react-spinners/ClipLoader";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ClipLoader
              color="#70ff8d"
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div>
          <Header />
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
