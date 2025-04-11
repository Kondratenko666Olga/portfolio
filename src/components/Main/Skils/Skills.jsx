import './Skiles.scss';

const skillsData = [
  { name: 'HTML', percent: '50%' },
  { name: 'CSS', percent: '20%' },
  { name: 'JAVASCRIPT', percent: '10%' },
  { name: 'PHP', percent: '2%' },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="title">My Skills</h2>
        <div className="block">
          {skillsData.map((skill, index) => (
            <div className="elem" key={index}>
              <span className="num">{skill.percent}</span>
              <span className="name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
