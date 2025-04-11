import './About.scss';
import about from '../../../images/icons/about.svg';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="descr">
          <h2 className="title">About</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
        <div className="social">
          <div className="slider">
            <div className="elem">
              <img loading="lazy" src={about} alt="decoration icon" />
              <h3 className="title">Full Name</h3>
              <span>Your name goes here</span>
            </div>
            <div className="elem">
              <img loading="lazy" src={about} alt="decoration icon" />
              <h3 className="title">Email Address</h3>
              <span>Your email goes here</span>
            </div>
            <div className="elem">
              <img loading="lazy" src={about} alt="decoration icon" />
              <h3 className="title">Twitter</h3>
              <span>Your email goes here</span>
            </div>
            <div className="elem">
              <img loading="lazy" src={about} alt="decoration icon" />
              <h3 className="title">Phone</h3>
              <span>Your name goes here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
