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
    { 
      label: "HTML", 
      imagePath: "img/skills/HTML.png",
      descriptions: [
        "Markup language for creating web pages",
        "Structure content on the web",
        "Used with CSS and JavaScript"
      ]
    },
    { 
      label: "CSS", 
      imagePath: "img/skills/CSS.png",
      descriptions: [
        "Styles web pages",
        "Controls layout and design",
        "Responsive design with media queries"
      ]
    },
    { 
      label: "Docusaurus", 
      imagePath: "img/skills/Docusaurus.png",
      descriptions: [
        "Tool for building documentation websites",
        "Supports Markdown",
        "Easy versioning and theming"
      ]
    },
    { 
      label: "Python", 
      imagePath: "img/skills/Python.png",
      descriptions: [
        "General-purpose programming language",
        "Great for scripting and automation",
        "Supports many libraries and frameworks"
      ]
    },
    { 
      label: "Shell scripting", 
      imagePath: "img/skills/Terminal.png",
      descriptions: [
        "Automate tasks in the terminal",
        "Use loops, conditions, and variables",
        "Integrates with Linux/Unix systems"
      ]
    },
    { 
      label: "YAML", 
      imagePath: "img/skills/YAML.png",
      descriptions: [
        "Data serialization format",
        "Human-readable",
        "Used in config files like CI/CD pipelines"
      ]
    },
    { 
      label: "Container", 
      imagePath: "img/skills/Docker.png",
      descriptions: [
        "Package applications with dependencies",
        "Run consistently across environments",
        "Lightweight virtualization"
      ]
    },
    { 
      label: "CI/CD with Github Actions", 
      imagePath: "img/skills/Actions.png",
      descriptions: [
        "Automate software workflows",
        "Build, test, and deploy projects",
        "Integrates with GitHub repositories"
      ]
    },
    { 
      label: "IT Security", 
      imagePath: "img/skills/Security.png",
      descriptions: [
        "Protect systems and data",
        "Implement best practices and policies",
        "Monitor and respond to threats"
      ]
    },
  ]}
/>

      <MyProjects
        title="My Projects"
        projects={[
          {
            label: "Minecraft",
            imagePath: "img/projects/projects/Minecraft.png",
            description: "Automated Minecraft server setup and monitoring.",
            githubUrl: "https://github.com/HerzogElias/Minecraft_Server",
            docsUrl: "docs/projects/minecraft-server",
            tags: [
              { label: "Shell Scripting", imagePath: "img/projects/Shell.png" },
              { label: "Docker", imagePath: "img/projects/Docker.png" },
              { label: "YAML", imagePath: "img/projects/YAML.png" },
            ],
            tagsResponsive: [
              { label: "Shell Scripting", imagePath: "img/projects/respo/Shell.png" },
              { label: "Docker", imagePath: "img/projects/respo/Container.png" },
              { label: "YAML", imagePath: "img/projects/respo/YAML.png" },
            ],
          },
          {
            label: "Juice Shop Master",
            imagePath: "img/projects/projects/juiceshop.png",
            description:
              "Challenges for finding security vulnerabilities like XSS attacks and SQL injections.",
            githubUrl: "https://github.com/HerzogElias/OwaspJuiceShop",
            docsUrl: "docs/projects/Juice-Shop",
            tags: [
              { label: "Python", imagePath: "img/projects/Python.png" },
              { label: "IT Security", imagePath: "img/projects/ITSec.png" },
            ],
            tagsResponsive: [
              { label: "Python", imagePath: "img/projects/respo/Python.png" },
              { label: "IT Security", imagePath: "img/projects/respo/ITSec.png" },
            ],
          },
          {
            label: "Wordpress",
            imagePath: "img/projects/projects/Wordpress.png",
            description:
              "In this project I created a Docker Compose file to deploy a Wordpress blogging website.",
            githubUrl: "https://github.com/HerzogElias/Wordpress_Docker",
            docsUrl: "docs/projects/wordpress",
            tags: [
              { label: "Shell Scripting", imagePath: "img/projects/Shell.png" },
              { label: "Docker", imagePath: "img/projects/Docker.png" },
            ],
            tagsResponsive: [
              { label: "Shell Scripting", imagePath: "img/projects/respo/Shell.png" },
              { label: "Docker", imagePath: "img/projects/respo/Container.png" },
            ],
          },
          {
            label: "Conduit Deployment",
            imagePath: "img/projects/projects/Conduit.png",
            description:
              "For this fullstack web application with Angular and Django, I created a Docker Compose file and an automatic deployment pipeline.",
            githubUrl: "https://github.com/HerzogElias/conduit-fullstack",
            docsUrl: "docs/projects/conduit-deployment",
            tags: [
              { label: "Shell Scripting", imagePath: "img/projects/Shell.png" },
              { label: "Docker", imagePath: "img/projects/Docker.png" },
              { label: "YAML", imagePath: "img/projects/YAML.png" },
              { label: "CD", imagePath: "img/projects/CD.png" },
            ],
            tagsResponsive: [
              { label: "Shell Scripting", imagePath: "img/projects/respo/Shell.png" },
              { label: "Docker", imagePath: "img/projects/respo/Container.png" },
              { label: "YAML", imagePath: "img/projects/respo/YAML.png" },
              { label: "CD", imagePath: "img/projects/respo/CD.png" },
            ],
          },
        ]}
      />


      <Contact />
      <Footer />
    </section>
  );
}
