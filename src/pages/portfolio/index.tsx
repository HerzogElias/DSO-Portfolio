import React from "react";
import "./index.css";
import HeroComponent from "@site/src/components/HeroComponent/HeroComponent";
import MySkills from "@site/src/components/MySkillsComponent/MySkillsComponent";
import MyProjects from "@site/src/components/MyProjectComponent/MyProjectComponent";
import Contact from "@site/src/components/ContactComponent/ContactComponent";
import Footer from "@site/src/components/FooterComponent/FooterComponent";

export default function Render() {
  return (
    <section className="about-me">
      <div className="hero-section">
        <div className="content">
          <HeroComponent />
        </div>
      </div>


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

      <MyProjects
        projects={[
          {
            label: "Minecraft Server Setup",
            imagePath: "/img/projects/projects/Minectraft.png",
            description: "Automated Minecraft server setup and monitoring.",
            tags: [
              { label: "Shell Scripting", imagePath: "img/projects/Shell.png" },
              { label: "Docker", imagePath: "img/projects/Docker.png" },
              { label: "YAML", imagePath: "img/projects/YAML.png" },
            ],
          },

          {
            label: "Juice Shop Master",
            imagePath: "img/projects/projects/juiceshop.png",
            description: "Challanges for finding Security Vulnerabilitys like XSS Atattcs and SQL Injections",
            tags: [
              { label: "Python", imagePath: "img/projects/Python.png" },
              { label: "IT Secturity", imagePath: "img/projects/ITSec.png" },
            ],
          },
        ]}
        title="My Projects"
      />

     <Contact></Contact>
     <Footer></Footer>
    </section>
  );
}
