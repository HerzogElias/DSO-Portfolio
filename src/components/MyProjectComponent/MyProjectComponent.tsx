import React, { useState } from "react";
import styles from "./MyProjectComponent.module.css";
import { ISkillElement } from "../MySkillsComponent/MySkillsComponent";

// ---- Interface für ein einzelnes Projekt ----
export interface IProjectElement {
  label: string;
  imagePath: string;
  description: string;
  tags?: ISkillElement[];
  docsUrl?: string;
  githubUrl?: string;
}

// ---- Props für die Komponente ----
export interface IProjectsProps {
  projects: IProjectElement[];
}

export default function MyProjects(props: IProjectsProps) {
  return (
    <section className={styles.myProject}>
      <h1>My Projects</h1>
      <div className={styles.content}>
        <div className={styles.projectlist}>
              {projects.map((project, index) => (
              <li key={index} className={styles.projectItem}>
              </li>
        </div>
        <div>Rechts mit der Detail ansicht</div>
      </div>
    </section>
  );
}
