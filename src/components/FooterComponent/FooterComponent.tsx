import React from "react";
import { Link } from "react-router-dom"; // <-- Wichtig!
import styles from "./FooterComponent.module.css";

export default function Footer() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.Footer}>
                <img className={styles.img} src="/img/Footer/Arrow_up.png" alt="" />
            </div>

            <div>
                <span>© Elias Herzog</span>
                <Link to="/legal" className={styles.link}>
                    Legal Notice
                </Link>
            </div>
        </section>
    );
}
