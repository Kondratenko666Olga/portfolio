import './Services.scss';
import services1 from '../../../../images/icons/services1.svg';
import services2 from '../../../../images/icons/services2.svg';
import services3 from '../../../../images/icons/services3.svg';

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="services-title"></h2>
        <div className="services-block">
          <div className="services-block__elem">
            <img
              loading="lazy"
              src={services1}
              alt="Software Development icon"
            />
            <span>
              Software <br />
              Development
            </span>
          </div>
          <div className="services-block__elem">
            <img loading="lazy" src={services2} alt="Web Development icon" />
            <span>
              Web <br />
              Development
            </span>
          </div>
          <div className="services-block__elem">
            <img loading="lazy" src={services3} alt="Web Design icon" />
            <span>
              Web <br />
              Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
