import './Introduct.scss';
import main from '../../../../images/main.webp';

const Introduct = () => {
  return (
    <section className="introdict">
      <div className="container">
        <div className="introdict-about">
          <h1>Introduction</h1>
          <p>Welcome to my portfolio</p>
          <div className="introdict-btns">
            <div className="introdict-btn accent">
              <a href="">Download CV</a>
            </div>
            <div className="introdict-btn">
              <a href="#contacts">Contact me</a>
            </div>
          </div>
        </div>
        <div className="introdict-img">
          <img loading="lazy" src={main} alt="Intro" />
        </div>
      </div>
    </section>
  );
};

export default Introduct;
