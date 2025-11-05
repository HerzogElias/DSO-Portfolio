import React from "react";
import styles from "./MySkillsComponent.module.css"; 

export interface ISkillElement {
  label: string;
  imagePath: string;
}

export interface ISkillsProps {
  skills: ISkillElement[];
}

export default function MySkills(props: ISkillsProps) {
  return (
    <section id="my-skills" className={styles.mySkills}>
      <h2>MY SKILLS</h2>
      <div className={styles.skillContent}>
      {props.skills.map((skill) => (
        <div key={skill.label} className={styles.skillDetail}>
          <img
            src={skill.imagePath}
            alt={skill.label}
            className={styles.skillDetailImg}
          />
          <span>{skill.label}</span>
        </div>
      ))}
      </div>
    </section>
  );
}

