import React from "react";
import styles from "./HeroComponent.module.css";
import HeaderNavbar from "../../components/HeaderComponent/HeaderComponent";

export default function HeroComponent() {
  return (
    <section className={styles.section} id="about">
      <HeaderNavbar />
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroMyprofile}>
            <h3>Hey there I`m</h3>
            <h1>Elias Herzog</h1>
            <h2>DevSecOps Engeneer</h2>
            <p>
              Hallo you! I am Elias Herzog, and I`m a Fullstack Developer with
              specialization in DevSecOps.
            </p>
            <a href="#contact">
              <button className={styles.button}>Contact me</button>
            </a>
          </div>
          <div>
            <img src="img/foto_elias.png" alt="Elias Herzog" typeof="img"/>
          </div>
        </div>
      </div>
    </section>
  );
}
