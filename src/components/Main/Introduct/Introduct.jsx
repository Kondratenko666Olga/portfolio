import './Introduct.scss';
import main from '../../../images/main.webp';

const Introduct = () => {
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
            <div className="accent">
              <a href="">Download CV</a>
            </div>
            <div>
              <a href="#contacts">Contact me</a>
            </div>
          </div>
        </div>
        <div className="introduct-img">
          <img loading="lazy" src={main} alt="Intro" />
        </div>
      </div>
    </section>
  );
};

export default Introduct;
