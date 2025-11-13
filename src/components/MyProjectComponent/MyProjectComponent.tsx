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
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.wrapper}>
                <nav className={styles.projectList}>
                    <ul>
                        {projects.map((project, index) => (
                            <li
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={
                                    activeIndex === index ? styles.active : ""
                                }
                            >
                                {project.label}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.content}>
                    <div className={styles.oben}>
                        <h3>{activeProject.label}</h3>

                        <div className={styles.tagsRow}>
                            {activeProject.tags?.map((tag, index) => (
                                <img
                                    key={index}
                                    src={tag.imagePath}
                                    alt={tag.label}
                                    className={styles.tagIcon}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.unten}>
                        <img
                            src={activeProject.imagePath}
                            alt="project visual"
                        />

                        <div className={styles.projectDescription}>
                            <span>{activeProject.description}</span>

                            <div className={styles.projectLinks}>
                                {activeProject.docsUrl && (
                                    <a
                                        href={activeProject.docsUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className={styles.button}>
                                            Dokumentation
                                        </button>
                                    </a>
                                )}

                                {activeProject.githubUrl && (
                                    <a
                                        href={activeProject.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className={styles.button}>
                                            GitHub
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
