import './Skiles.scss';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="skills-title"></h2>
        <div className="skills-block">
          <div className="skills-block__elem">
            <span className="skills-block__elem-num">50%</span>
            <span className="skills-block__elem-name">HTML</span>
          </div>
          <div className="skills-block__elem">
            <span className="skills-block__elem-num">20%</span>
            <span className="skills-block__elem-name">CSS</span>
          </div>
          <div className="skills-block__elem">
            <span className="skills-block__elem-num">10%</span>
            <span className="skills-block__elem-name">JAVASCRIPT</span>
          </div>
          <div className="skills-block__elem">
            <span className="skills-block__elem-num">2%</span>
            <span className="skills-block__elem-name">PHP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
