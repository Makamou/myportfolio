import "./styles/general.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects, { Contact } from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <div className="content">
        <div className="portfolio-body">
          <About />
          <Skills />
          <Projects />

          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}
