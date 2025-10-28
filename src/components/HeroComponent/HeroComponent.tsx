import React from "react";
import styles from "./HeroComponent.module.css";

// ============ Hauptkomponente ============
export default function HeroComponent() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}

// ============ Unterkomponente: Textblock ============
function HeroText() {
  return (
    <div className={styles.textSection}>
      <HeroGreeting />
      <HeroHeadline />
      <HeroDescription />
      <HeroCTA />
    </div>
  );
}

// -- Begrüßungsteil
function HeroGreeting() {
  return <h3>Hey there. 👋 I am</h3>;
}

// -- Name & Titel
function HeroHeadline() {
  return (
    <>
      <h1>Felix Wallke</h1>
      <h2>DevSecOps Engineer</h2>
    </>
  );
}

// -- Beschreibungstext
function HeroDescription() {
  return (
    <p>
      Write some information about yourself that is IT related.
      <br />
      <strong>For example:</strong> Why are you passionate about coding?
      Do you have a deep interest in games? What inspires you to improve
      your skills?
    </p>
  );
}

// -- Button
function HeroCTA() {
  return <button className={styles.ctaButton}>Contact me</button>;
}

// ============ Unterkomponente: Bildblock ============
function HeroImage() {
  return (
    <div className={styles.imageSection}>
      <img
        src="/path/to/profile.jpg"
        alt="Profile portrait"
        className={styles.profileImage}
      />
    </div>
  );
}

