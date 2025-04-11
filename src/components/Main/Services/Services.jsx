import './Services.scss';
import services1 from '../../../images/icons/services1.svg';
import services2 from '../../../images/icons/services2.svg';
import services3 from '../../../images/icons/services3.svg';

const servicesData = [
  {
    img: services1,
    alt: 'Software Development icon',
    title: 'Software Development',
  },
  {
    img: services2,
    alt: 'Web Development icon',
    title: 'Web Development',
  },
  {
    img: services3,
    alt: 'Web Design icon',
    title: 'Web Design',
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="title">What i do</h2>
        <div className="block">
          {servicesData.map((service, index) => (
            <div className="elem" key={index}>
              <img loading="lazy" src={service.img} alt={service.alt} />
              <span>
                {service.title.split(' ')[0]} <br />
                {service.title.split(' ')[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;