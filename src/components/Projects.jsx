import "./../styles/body.css";
import "./../styles/projects.css";

import guessGame from "../assets/guessGame.png";
import studio from "../assets/studio.png";
import pigGame from "../assets/pigGame.png";

export default function Projects() {
  const projects = [
    {
      title: "Guess Game",
      subtitle: "Can You Guess the Computer's Number?",
      link: "https://makamou.github.io/guess-game/",
      img: guessGame,
      color: "#7af57a",
    },
    {
      title: "Photographic Website",
      subtitle: "Documenting my journey through photography",
      link: "https://makamou.github.io/petite-focus/index.html",
      img: studio,
      color: "#b57aff",
    },
    {
      title: "Pig Game",
      subtitle: "Turn-based dice game with risk and strategy.",
      link: "https://makamou.github.io/my-pig-game/",
      img: pigGame,
      color: "#7ad2ff",
    },
  ];

  return (
    <div className="body-project bodySize" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((p, index) => (
          <div key={index} className="project-item">
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <div
                className="project-image"
                style={{
                  backgroundImage: `url(${p.img})`,
                }}
              ></div>
              <div
                className="project-description"
                style={{
                  background: `linear-gradient(90deg, ${p.color}, ${p.color}cc)`,
                }}
              >
                <h3>{p.title}</h3>
                <p>{p.subtitle}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

// export function Experience() {
//   return <div className="body-experience bodySize">Experience</div>;
// }

export function Contact() {
  return (
    <div id="contact" className="body-contact bodySize">
      <h2 className="contact-title">Contact Me</h2>

      <p className="contact-intro">
        Let’s connect — whether it’s a question, a project idea, or just a
        friendly hello!
      </p>

      <div className="contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:youremail@example.com">amkristian91@gmail.com</a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+12142070768">+1 (214) 207-0768</a>
        </p>
        <p>
          <strong>Location:</strong> Dallas, TX
        </p>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="nav-btn ">
          Send Message
        </button>
      </form>
    </div>
  );
}
