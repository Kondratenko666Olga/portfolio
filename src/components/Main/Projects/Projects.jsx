import './Projects.scss';
import projectsData from './projectsData';

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-inner">
          <h2 className="title projects-title">My projects</h2>
          <div className="projects-wrapper">
            {projectsData.map((project) => (
              <div className="projects-item">
                <div className="projects-item-img">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="projects-item-info">
                  <h3 className="projects-item-title">{project.title}</h3>
                  <p className="projects-item-descr">{project.descr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
