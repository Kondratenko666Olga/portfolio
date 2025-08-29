import './Projects.scss';
import projectsData from './projectsData';
import { useState } from 'react';

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-inner">
          <h2 className="title projects-title">My projects</h2>
          <div className="projects-wrapper">
            {projectsData.map((project, index) => (
              <div className="projects-item" key={project.title}>
                <div
                  className={`projects-item-inner${
                    flippedIndex === index ? ' is-flipped' : ''
                  }`}
                >
                  <div className="projects-item-face projects-item-front">
                    <div className="projects-item-img">
                      <img src={project.img} alt={project.title} />
                    </div>
                    <div className="projects-item-info">
                      <div className="projects-item-info__text">
                        <h3 className="projects-item-title">{project.title}</h3>
                        <p className="projects-item-descr">{project.descr}</p>
                      </div>
                      <button
                        className="projects-item-btn"
                        onClick={() => handleFlip(index)}
                      >
                        Show more
                      </button>
                    </div>
                  </div>
                  <div className="projects-item-face projects-item-back">
                    <div className="projects-item-back__content">
                      <h3 className="projects-item-title">{project.title}</h3>
                      <p className="projects-item-back__descr">
                        {project.about || project.descr}
                      </p>
                      {project.link && (
                        <a
                          className="projects-item-link"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title} live page`}
                        >
                          Open project page →
                        </a>
                      )}
                      {(project.git_front || project.git_back) && (
                        <div className="git-info">
                          {project.git_front && (
                            <a
                              className="projects-item-link"
                              href={project.git_front}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} GitHub front repository`}
                            >
                              Open project GitHub (front repo) →
                            </a>
                          )}
                          {project.git_back && (
                            <a
                              className="projects-item-link"
                              href={project.git_back}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title} GitHub back repository`}
                            >
                              Open project GitHub (back repo) →
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      className="projects-item-btn"
                      onClick={() => handleFlip(index)}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
