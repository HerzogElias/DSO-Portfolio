import React from "react";
import styles from "./HeaderComponent.module.css";

export default function HeaderNavbar() {
 

  return (
    <>
      <div className={styles.header}>
        <nav className={styles.navElement}>
          <a className={styles.aLink} href="#about">About me</a>
          <a className={styles.aLink} href="#skills">My skills</a>
          <a className={styles.aLink} href="#projects">My projects</a>
          <a className={styles.aLink} href="#contact">Contact</a>
        </nav>
      </div>

    </>
  );
}
