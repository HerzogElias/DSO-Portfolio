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

      <div className="about-me">


        <MySkills
          skills={[
            {
              label: "HTML",
              imagePath: "img/skills/HTML.png",
              imagePathRespo: "img/skills/HTML.png",
              descriptions: [
                "Markup language for creating web pages",
                "Structure content on the web",
                "Used with CSS and JavaScript"
              ]
            },
            {
              label: "CSS",
              imagePath: "img/skills/CSS.png",
              imagePathRespo: "img/skills/respo/CSS.png",
              descriptions: [
                "Styles web pages",
                "Controls layout and design",
                "Responsive design with media queries"
              ]
            },
            {
              label: "Docusaurus",
              imagePath: "img/skills/Docusaurus.png",
              imagePathRespo: "img/skills/respo/Docusaurus.png",
              descriptions: [
                "Tool for building documentation websites",
                "Supports Markdown",
                "Easy versioning and theming"
              ]
            },
            {
              label: "Python",
              imagePath: "img/skills/Python.png",
              imagePathRespo: "img/skills/respo/Python.png",
              descriptions: [
                "General-purpose programming language",
                "Great for scripting and automation",
                "Supports many libraries and frameworks"
              ]
            },
            {
              label: "Shell scripting",
              imagePath: "img/skills/Terminal.png",
              imagePathRespo: "img/skills/respo/Terminal.png",
              descriptions: [
                "Automate tasks in the terminal",
                "Use loops, conditions, and variables",
                "Integrates with Linux/Unix systems"
              ]
            },
            {
              label: "YAML",
              imagePath: "img/skills/YAML.png",
              imagePathRespo: "img/skills/respo/YAML.png",
              descriptions: [
                "Data serialization format",
                "Human-readable",
                "Used in config files like CI/CD pipelines"
              ]
            },
            {
              label: "Container",
              imagePath: "img/skills/Docker.png",
              imagePathRespo: "img/skills/respo/Docker.png",
              descriptions: [
                "Package applications with dependencies",
                "Run consistently across environments",
                "Lightweight virtualization"
              ]
            },
            {
              label: "CI/CD with Github Actions",
              imagePath: "img/skills/Actions.png",
              imagePathRespo: "img/skills/respo/Actions.png",
              descriptions: [
                "Automate software workflows",
                "Build, test, and deploy projects",
                "Integrates with GitHub repositories"
              ]
            },
            {
              label: "IT Security",
              imagePath: "img/skills/Security.png",
              imagePathRespo: "img/skills/respo/Security.png",
              descriptions: [
                "Protect systems and data",
                "Implement best practices and policies",
                "Monitor and respond to threats"
              ]
            },
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
              docsUrl: "docs/projects/juice-shop",
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
        />
        <Contact></Contact>
        <Footer></Footer>
      </div>

    </section>
  );
}
