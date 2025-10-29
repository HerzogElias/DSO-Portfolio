import React from "react";
import styles from "./HeroComponent.module.css";
import HeaderNavbar from "../../components/HeaderComponent/HeaderComponent";

export default function HeroComponent() {
  return (
    <section>
       <HeaderNavbar></HeaderNavbar>
      <div className={styles.hero}>
        <div className="hero-myprofile">
          <h3> Hey there I`am </h3>
          <h1> Elias Herzog</h1>
          <p> Hallo you! I am Elias Herzog, and I`am Fullstack Developer with Spezelasation in DevSecOps.</p>
          <button>Contact me</button>
        </div>
      </div>
      <div>
      </div>
    </section>
  );
}


