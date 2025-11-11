import React, { useState } from "react";
import styles from "./MyProjectComponent.module.css";
import { ISkillElement } from "../MySkillsComponent/MySkillsComponent";

export interface IProjectElement {
  label: string;
  imagePath: string;
  description: string;
  tags?: ISkillElement[];
  docsUrl?: string;
  githubUrl?: string;
}

export interface IProjectsProps {
  projects: IProjectElement[];
  title: string;
}

export default function MyProjects({ projects, title }: IProjectsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className={styles.projectsSection}>
      <h1>{title}</h1>
      <div className={styles.content}>
        <div className={styles.projectsContainer}>
          <ul className={styles.projectList}>
            {projects.map((project, index) => (
              <li
                key={project.label}
                className={
                  index === activeIndex
                    ? `${styles.projectListItem} ${styles.active}`
                    : styles.projectListItem
                }
                onClick={() => setActiveIndex(index)}
              >
                {project.label}
              </li>
            ))}
          </ul>

          <div className={styles.projectDescription}>
            <div className={styles.projectDetail}>
              <h3>{activeProject.label}</h3>

              <img
                src={activeProject.imagePath}
                alt={activeProject.label}
                className={styles.projectImage}
              />

              <p>{activeProject.description}</p>

              <div className={styles.projectDescriptionLeft}>
                {activeProject.tags && (
                  <div className={styles.tags}>
                    {activeProject.tags.map((tag) => (
                      <img
                        key={tag.imagePath}
                        src={tag.imagePath}
                        alt={tag.label}
                        className={styles.tagIcon}
                      />
                    ))}
                  </div>
                )}

                <div className={styles.projectLinks}>
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="img/projects/Github.png"
                        alt="GitHub"
                        className={styles.linkIcon}
                      />
                    </a>
                  )}

                  {activeProject.docsUrl && (
                    <a
                      href={activeProject.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="img/projects/Documentation.png"
                        alt="Docs"
                        className={styles.linkIcon}
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
