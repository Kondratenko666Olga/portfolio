import './About.scss';
import aboutSocialData from './aboutSocialData';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-descr">
            <h2 className="about-descr__title title">About</h2>
            <p className="about-descr__text">
              My name is Olha, and I am a junior Frontend Developer. I work with
              HTML, CSS/SCSS, JavaScript, and React to build adaptive and
              user-friendly interfaces. Thanks to completing a Full Stack
              course, I also have an understanding of backend principles and
              client-server interaction, which helps me see a project as a
              whole.
              <br />
              On this page, you can explore some of my individual and team
              projects, as well as learn more about me. If you are interested in
              collaboration, please fill out the contact form — I will get back
              to you as soon as possible.
            </p>
          </div>
          <div className="about-social">
            {aboutSocialData.map((item, index) =>
              item.link ? (
                <a
                  key={index}
                  className="about-social__elem"
                  href={item.link}
                  target={item.targetBlank ? '_blank' : '_self'}
                  rel={item.targetBlank ? 'noopener noreferrer' : undefined}
                >
                  <img loading="lazy" src={item.img} alt="decoration icon" />
                  <h3 className="about-social__elem-subtitle">{item.title}</h3>
                  <span>{item.content}</span>
                </a>
              ) : (
                <div className="about-social__elem" key={index}>
                  <img loading="lazy" src={item.img} alt="decoration icon" />
                  <h3 className="about-social__elem-subtitle">{item.title}</h3>
                  <span>{item.content}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
