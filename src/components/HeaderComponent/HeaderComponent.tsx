import React, { useState } from "react";
import styles from "./HeaderComponent.module.css";

export default function HeaderNavbar() {
  const [isOpen, setIsOpen] = useState(false);

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
            <nav className={styles.navElement}>
              <a className={styles.aLink} href="#about" onClick={() => setIsOpen(false)}>About me</a>
              <a className={styles.aLink} href="#skills" onClick={() => setIsOpen(false)}>My skills</a>
              <a className={styles.aLink} href="#projects" onClick={() => setIsOpen(false)}>My projects</a>
              <a className={styles.aLink} href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
