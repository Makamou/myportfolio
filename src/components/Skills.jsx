import { useEffect, useRef } from "react";
import "./../styles/skills.css";

export default function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Pause rotation on hover
    container.addEventListener("mouseenter", () => {
      container.style.animationPlayState = "paused";
    });
    container.addEventListener("mouseleave", () => {
      container.style.animationPlayState = "running";
    });

    // Scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".skills-title, .skills-ring")
      .forEach((el) => observer.observe(el));
  }, []);

  const skills = [
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Java",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "AWS",
      img: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/amazonwebservices/amazonwebservices-line-wordmark.svg",
    },
  ];

  return (
    <div id="skills" className="body-skill">
      <h2 className="skill-title bodySize">Skills</h2>
      <div ref={containerRef} className="skills-ring">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className="skill-card"
            style={{ "--i": i, "--total": skills.length }}
          >
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
