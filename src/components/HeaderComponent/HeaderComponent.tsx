import React, { useState } from "react";
import styles from "./HeaderComponent.module.css";

export default function HeaderNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <nav>
          <a href="#about">About me</a>
          <a href="#skills">My skills</a>
          <a href="#projects">My projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <div className={styles.navbarRespo}>
        <div className={styles.navLine}>
          <img
            className={styles.navImage}
            src="img/navresOpen.png"
            alt="Open Navbar"
            onClick={() => setIsOpen(true)}
          />
        </div>

        {isOpen && (
          <div className={styles.navbarOpen}>
            <div className={styles.navLine}>
              <img
                className={styles.navCloseImage}
                src="img/navresClose.png"
                alt="Close Navbar"
                onClick={() => setIsOpen(false)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <nav>
              <a href="#about" onClick={() => setIsOpen(false)}>About me</a>
              <a href="#skills" onClick={() => setIsOpen(false)}>My skills</a>
              <a href="#projects" onClick={() => setIsOpen(false)}>My projects</a>
              <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
