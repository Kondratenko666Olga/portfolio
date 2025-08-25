import './Skiles.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const skillsData = [
  { name: 'HTML' },
  { name: 'CSS/SCSS' },
  { name: 'JavaScript' },
  { name: 'React' },
  { name: 'Git/GitHub' },
  { name: 'Responsive Design' },
  { name: 'REST API' },
  { name: 'Figma' },
  { name: 'Basic Node.js' },
  { name: 'Problem Solving' },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="skills-title title">My Skills</h2>
        <div className="skills-block">
          <Swiper
            breakpoints={{
              359: { slidesPerView: 1.5 },
              768: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3.5 },
            }}
            loop="true"
            spaceBetween={5}
            slidesPerView={1}
            grabCursor={true}
          >
            {skillsData.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="skills-block__elem" key={index}>
                  <span className="skills-block__elem-name">{skill.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Skills;
