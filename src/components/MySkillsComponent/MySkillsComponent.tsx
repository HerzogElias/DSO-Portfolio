import React, { useState } from "react";
import styles from "./MySkillsComponent.module.css";

export interface ISkillElement {
  label: string;
  imagePath: string;
  descriptions: string[];
}

export interface ISkillsProps {
  skills?: ISkillElement[];
}

export default function MySkills({ skills = [] }: ISkillsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const skillsPerPage = 3;
  const totalPages = Math.ceil(skills.length / skillsPerPage);
  const visibleSkills = skills.slice(currentIndex, currentIndex + skillsPerPage);

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * skillsPerPage);
  };

  const [hoveredSkill, setHoveredSkill] = useState<ISkillElement | null>(null);

  return (
    <section id="skills" className={styles.mySkills}>
      <div className={styles.innerContent}>
        <h2>MY SKILLS</h2>

        {/* DESKTOP SKILLS */}
        <div className={styles.skillContent}>
          {skills.map((skill) => (
            <div
              key={skill.label}
              className={styles.skillDetail}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img
                src={skill.imagePath || ""}
                alt={skill.label || ""}
                className={styles.skillDetailImg}
              />
              <span className={styles.skillName}>{skill.label}</span>

              {/* Hover Description Box */}
              {hoveredSkill === skill && (
                <div className={styles.hoverDescriptionBox}>
                  <h3>How I used this skills</h3>
                  <ul>
                    {skill.descriptions.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* MOBILE SKILLS */}
        <div className={styles.mobileSkillContent}>
          <div className={styles.content}>
            {visibleSkills.map((skill) => (
              <div key={skill.label} className={styles.skillDetailMobile}>
                <img
                  src={skill.imagePath || ""}
                  alt={skill.label || ""}
                  className={styles.skillDetailImg}
                />
                <ul>
                  {skill.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Pagination Dots */}
            <div className={styles.paginationDots}>
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className={`${styles.dot} ${
                    currentIndex / skillsPerPage === pageIndex
                      ? styles.activeDot
                      : ""
                  }`}
                  onClick={() => goToPage(pageIndex)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}