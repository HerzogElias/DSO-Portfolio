import React from "react";
import styles from "./ContactComponent.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>
                <h2 className={styles.titleMedium}>Contact me</h2>
                <div className={styles.contactWhyMe}>
                    <div className={styles.contactFlex}>

                    <ul>
                        <li>I am Fullstack Developer</li>
                        <li>Skills also in DevSecOps</li>
                        <li>Fundamental Business Skills</li>
                    </ul>


                    <div className={styles.contactContactData}>
                        <div className={styles.contactContactDataDetail}>
                            <img src="img/contact/mail.png" alt="mail" />
                            <a className={styles.aContact} href="mailto:contact@elias-herzog.de">
                                contact@elias-herzog.de
                            </a>
                        </div>

                        <div className={styles.contactContactDataDetail}>
                            <img src="img/contact/linkedin.png" alt="" />
                            <a className={styles.aContact} href="https://www.linkedin.com/in/elias-herzog-2b865728a/"  target="_blank">
                                Profile Page
                            </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
