import React from "react";
import "./index.css";
import HeroComponent from "@site/src/components/HeroComponent/HeroComponent";
import MySkills from "@site/src/components/MySkillsComponent/MySkillsComponent";

export default function Render() {
  return (
    <section className="about-me">
      <div className="hero-section">
        <div className="content">
          <HeroComponent />
        </div>
      </div>

      <div className="content">
        <MySkills
          skills={[
            { label: "HTML", imagePath: "img/skills/HTML.png" },
            { label: "CSS", imagePath: "img/skills/CSS.png" },
            { label: "Docusaurus", imagePath: "img/skills/Docusaurus.png" },
            { label: "Python", imagePath: "img/skills/Python.png" },
            { label: "Shell scripting", imagePath: "img/skills/Terminal.png" },
            { label: "YAML", imagePath: "img/skills/YAML.png" },
            { label: "Container", imagePath: "img/skills/Docker.png" },
            { label: "CI/CD with Github Actions", imagePath: "img/skills/Actions.png" },
            { label: "IT Security", imagePath: "img/skills/Security.png" }
          ]}
        />
      </div>
    </section>
  );
}
