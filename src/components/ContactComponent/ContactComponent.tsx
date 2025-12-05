import React from "react";
import styles from "./ContactComponent.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>
                <h2>Contact me</h2>
                <div className={styles.contactWhyMe}>
                    <div className={styles.test}>

                    <ul>
                        <li>I am Fullstack Developer</li>
                        <li>Skills also in DevSecOps</li>
                        <li>Fundamental Business Skills</li>
                    </ul>


                    <div className={styles.contactContactData}>
                        <p>
                            Email:{" "}
                            <a className={styles.aContact} href="mailto:contact@elias-herzog.de">
                                contact@elias-herzog.de
                            </a>
                        </p>

                        <p>
                            Telefon:{" "}
                            <a className={styles.aContact} href="tel:+4915753683264">
                                +49 1575 3683264
                            </a>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}
