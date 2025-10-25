import React from "react";
import styles from "./HeaderComponent.module.css";

export default function HeaderNavbar() {
  return (
    <div className={styles.header}>
      <nav>
        <a href="#about">About me</a>
        <a href="#skills">My skills</a>
        <a href="#projects">My projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}
