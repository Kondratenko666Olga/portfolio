import './Introduct.scss';

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
          <img src="" alt="Intro" />
        </div>
      </div>
    </section>
  );
};

export default Introduct;
