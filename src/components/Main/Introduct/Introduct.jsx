import './Introduct.scss';
import main from '../../../images/main.webp';

export default function Introduct({ onContactClick }) {
  return (
    <section className="introduct">
      <div className="container">
        <div className="introduct-about">
          <h1>
            Hi, I am <br />
            Olha Kondratenko
          </h1>
          <p>Frontend Developer</p>
          <div className="introduct-btns">
            <div className="cv-btn btn accent">
              <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
            <button className="contact-btn btn" onClick={onContactClick}>
              Contact me
            </button>
          </div>
        </div>
        <div className="introduct-img">
          <img loading="lazy" src={main} alt="Intro" />
        </div>
      </div>
    </section>
  );
}
