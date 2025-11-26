import React, { useState } from "react";
import styles from "./MySkillsComponent.module.css";

export interface ISkillElement {
  label: string;
  imagePath: string;
}

export interface ISkillsProps {
  skills: ISkillElement[];
}

export default function MySkills({ skills }: ISkillsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsPerPage = 3;

  // Slice der Skills für Mobile
  const visibleSkills = skills.slice(currentIndex, currentIndex + skillsPerPage);

  const handleNext = () => {
    if (currentIndex + skillsPerPage < skills.length) {
      setCurrentIndex(currentIndex + skillsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - skillsPerPage >= 0) {
      setCurrentIndex(currentIndex - skillsPerPage);
    }
  };

  return (
    <section id="skills" className={styles.mySkills}>
      <div className={styles.innerContent}>
        <h2>MY SKILLS</h2>


        <div className={styles.skillContent}>
          {skills.map((skill) => (
            <div key={skill.label} className={styles.skillDetail}>
              <img
                src={skill.imagePath}
                alt={skill.label}
                className={styles.skillDetailImg}
              />
              <span className={styles.skillName}>{skill.label}</span>
            </div>
          ))}
        </div>



        <div className={styles.mobileSkillContent}>
          <div className={styles.content}>
            {visibleSkills.map((skill) => (
              <div key={skill.label} className={styles.skillDetail}>
                <img
                  src={skill.imagePath}
                  alt={skill.label}
                  className={styles.skillDetailImg}
                />
                <span className={styles.skillName}>{skill.label}</span>
              </div>
            ))}


            <div className={styles.paginationButtons}>
              <button onClick={handlePrev} disabled={currentIndex === 0}>
                Previous
              </button>
              
              <button
                onClick={handleNext}
                disabled={currentIndex + skillsPerPage >= skills.length}
              >
                Next
              </button>
            </div>
          </div>
        </div>  
        </div>
    </section>
  );
}
