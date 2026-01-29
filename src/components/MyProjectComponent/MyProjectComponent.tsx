import React, { useState } from "react";
import styles from "./MyProjectComponent.module.css";

export interface IProjectTag {
  label: string;
  imagePath: string;
}

export interface IProjectElement {
  label: string;
  imagePath: string;
  description: string;
  tags?: IProjectTag[];
  tagsResponsive?: IProjectTag[];
  docsUrl?: string;
  githubUrl?: string;
}

export interface IProjectsProps {
  projects: IProjectElement[];
}

export default function MyProjects({ projects}: IProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.projectContent}>
        <h2 className={styles.title}>My project highlights</h2>
        <div className={styles.wrapper}>
          <nav className={styles.projectList}>
            <ul>
              {projects.map((project, index) => (
                <li
                  key={project.label}
                  onClick={() => setActiveIndex(index)}
                  className={activeIndex === index ? styles.active : ""}
                >
                  {project.label}
                </li>
              ))}
            </ul>
            <a href="docs/projects/baby-tools" target="_blank"className={styles.seeMoreDesktop}>
              See more projects
            </a>
          </nav>
          <div className={styles.content}>
            <div className={styles.oben}>
              <h3>{activeProject.label}</h3>
              <div className={styles.tagsRow}>
                {activeProject.tags?.map((tag) => (
                  <img
                    key={tag.label}
                    src={tag.imagePath}
                    alt={tag.label}
                    className={styles.tagIcon}
                  />
                ))}
              </div>
            </div>
            <div className={styles.unten}>
              <img src={activeProject.imagePath} alt={activeProject.label} />
              <div className={styles.projectDescription}>
                <span className={styles.descriptionSpan}>
                  {activeProject.description}
                </span>
                <div className={styles.projectLinks}>
                  {activeProject.docsUrl && (
                    <a href={activeProject.docsUrl} target="_blank" rel="noreferrer">
                      <button className={styles.buttonDark}>Dokumentation</button>
                    </a>
                  )}
                  {activeProject.githubUrl && (
                    <a href={activeProject.githubUrl} target="_blank" rel="noreferrer">
                      <button className={styles.buttonLight}>GitHub</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.projectResponsive}>
        <h2 className={styles.title}>My project heighligts</h2>
        {projects.map((project, index) => (
          <div key={project.label} className={styles.respCard}>
            <div className={styles.respContent}>

            
            <h3 className={styles.respTitle}>
              {index + 1}. {project.label}
            </h3>
            <div className={styles.respTags}>
              {project.tagsResponsive?.map((tag) => (
                <img
                  key={tag.label}
                  src={tag.imagePath}
                  alt={tag.label}
                  className={styles.respTagIcon}
                />
              ))}
            </div>
            <img src={project.imagePath} alt={project.label} className={styles.respImage} />
            <span className={styles.respDescription}>{project.description}</span>
            <div className={styles.respButtons}>
              {project.docsUrl && (
                <a href={project.docsUrl} target="_blank" rel="noreferrer">
                  <button className={styles.respButtonLight}>Documentation</button>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <button className={styles.respButtonOutline}>GitHub</button>
                </a>
              )}
            </div>
          </div>
          </div>
        ))}
        <a href="docs/projects/baby-tools" target="_blank">
          <button className={styles.respSeeMoreButton}>See more projects</button>
        </a>
      </div>
    </section>
  );
}
