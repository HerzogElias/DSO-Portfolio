import React from "react";
import "./index.module.css";
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
            imagePath: "img/projects/projects/Minecraft.png",
            description: "Automated Minecraft server setup and monitoring.",
            githubUrl: "https://github.com/HerzogElias/Minecraft_Server",
            docsUrl: "docs/projects/minecraft-server",
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
            githubUrl: "https://github.com/HerzogElias/OwaspJuiceShop",
            docsUrl: "docs/projects/Juice-Shop",
            tags: [
              { label: "Python", imagePath: "img/projects/Python.png" },
              { label: "IT Secturity", imagePath: "img/projects/ITSec.png" },
            ],
          },
          ,
          {
            label: "Wordpress",
            imagePath: "img/projects/projects/Wordpress.png",
            description: "In this project I featured a Docker Compose file, where you can deploy a Wordpress Blogging Website",
            githubUrl: "https://github.com/HerzogElias/Wordpress_Docker",
            docsUrl: "docs/projects/wordpress",
            tags: [
              { label: "Shell Scripting", imagePath: "img/projects/Shell.png" },
              { label: "Docker", imagePath: "img/projects/Docker.png" },
            ],
          },
                  {
            label: "Conduit Deployment",
            imagePath: "img/projects/projects/Conduit.png",
            description: "For this Fullstack Webapplication with Angular and Django, I created a Docker Compoese File and a Automatic Deployment Pipeline",
            githubUrl: "https://github.com/HerzogElias/conduit-fullstack",
            docsUrl: "docs/projects/conduit-deployment",
            tags: [
              { label: "Shell Scripting", imagePath: "img/projects/Shell.png" },
              { label: "Docker", imagePath: "img/projects/Docker.png" },
              { label: "YAML", imagePath: "img/projects/YAML.png" },
              { label: "CD", imagePath: "img/projects/CD.png" },
            ],
          },
        ]
        }
        title="My Projects"
      />

      <Contact></Contact>
      <Footer></Footer>
    </section>
  );
}
