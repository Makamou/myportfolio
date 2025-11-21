import { useState, useEffect } from "react";
import "./../styles/navbar.css";
import myPicture from "../assets/logo-portfolio.png";

export default function Navbar() {
  const [activeButton, setActiveButton] = useState("Projects");

  // Smooth scroll function
  const handleButtonClick = (section) => {
    setActiveButton(section);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const yOffset = -100; // scroll 20px above the element
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Detect which section is in view
  useEffect(() => {
    const sections = document.querySelectorAll(
      " #about,#projects, #skills, #contact"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveButton(
              entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1)
            );
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="portfolio-navbar">
      <div className="navbar-left">
        <img src={myPicture} className="portfolio-logo" alt="Logo" />
      </div>

      <div className="navbar-right">
        {["About", "Skills", "Projects", "Contact"].map((btn) => (
          <button
            key={btn}
            className={`nav-btn ${activeButton === btn ? "active" : ""}`}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
