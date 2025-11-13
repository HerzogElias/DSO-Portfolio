import React from "react";
import Link from '@docusaurus/Link';
import styles from "./FooterComponent.module.css";

export default function Footer() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.Footer}>
                <img className={styles.img} src="/img/Footer/Arrow_up.png" alt="" />
            </div>

            <div className={styles.contactContactRoutes}>
                <span>© Elias Herzog</span>
                <Link to="imprint" className={styles.link}>
                    Legal Notice
                </Link>

                <Link to="/portfolio" className={styles.link}>
                    Home
                </Link>


            </div>
        </section>
    );
}
