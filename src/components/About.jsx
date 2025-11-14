import "./../styles/body.css";
import profile from "../assets/myPicture-blackWhitejpg.jpg";

export default function About() {
  return (
    <div id="About" className="body-about bodySize">
      <img src={profile} className="profile-image" alt="Moubarak Akamou" />
      <p className="about-text">
        Hey there! I’m <strong>Moubarak Akamou</strong>, a dedicated web
        developer with
        <br />
        more than two years of hands-on experience, driven by curiosity and{" "}
        <br />a deep passion for technology. I specialize in building scalable,
        res-
        <br />
        ponsive, and high-performance web applications designed for <br />
        exceptional user experiences.
      </p>
    </div>
  );
}
