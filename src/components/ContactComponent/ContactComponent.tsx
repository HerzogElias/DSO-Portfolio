import React from "react";
import styles from "./ContactComponent.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.contactContainer}>
                <div className={styles.contactWhyMe}>
                    <h2>Contact me</h2>
                    <span>Why Me:</span>
                    <ul>
                        <li>I am Fullstack Developer</li>
                        <li>Skills also in DevSecOps</li>
                        <li>Fundamental Business Skills</li>
                    </ul>
                </div>

                <div className={styles.contactContactData}>
                    <p>Email: contact@elias-herzog.de</p>
                    <p>Telefon: +49 1575 3683264</p>
                </div>
            </div>
        </section>
    );
}
