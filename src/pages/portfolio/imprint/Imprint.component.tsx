import React from "react";
import { Link } from "react-router-dom";
import styles from "./Imprint.component.module.css";

export default function Footer() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.Footer}>
                <img className={styles.img} src="/img/Footer/Arrow_up.png" alt="" />
            </div>

            <div>


                <p>Elias Herzog<br />
                    Zum Leppetal 11<br />
                    51709 Marienheide</p>



                <Link to="/portfolio/Imprint" className={styles.link}>
                    Legal Notice
                </Link>

                <Link to="/portfolio" className={styles.link}>
                    Home
                </Link>
            </div>
        </section>
    );
}
