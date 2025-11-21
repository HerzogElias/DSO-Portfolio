import React from "react";
import "./index.css";
import Link from '@docusaurus/Link';


export default function ImprintPage() {
    return (
        <section id="imprint" className="imprint">
            <div className="imprint-card">
                <h2 className="imprint-title">Imprint</h2>
                <p className="imprint-text">
                    Elias Herzog <br />
                    Zum Leppetal 11 <br />
                    51709 Marienheide
                </p>


                <p className="imprint-subtitle">Kontaktmöglichkeiten:</p>
                <div className="contactContactData">

                    <p className="imprint-text">
                        Email:{" "}
                        <a href="mailto:contact@elias-herzog.de">
                            contact@elias-herzog.de
                        </a>
                    </p>

                    <p className="imprint-text">
                        Telefon:{" "}
                        <a href="tel:+4915753683264">
                            +49 1575 3683264
                        </a>
                    </p>
                </div>
            </div>


            <div className="contact">
                <span className="span">© Elias Herzog</span>
                <Link to="/imprint">
                    Legal Notice
                </Link>
                <Link to="/">
                    Home
                </Link>


            </div>
        </section>
    );
}