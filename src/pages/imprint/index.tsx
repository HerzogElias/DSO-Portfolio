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
                    <p className="imprint-text">Email: contact@elias-herzog.de</p>
                    <p className="imprint-text">Telefon: +49 1575 3683264</p>
                </div>
            </div>


            <div className="contact">
                <span>© Elias Herzog</span>
                <Link to="imprint">
                    Legal Notice
                </Link>

                <Link to="/portfolio">
                    Home
                </Link>


            </div>
        </section>
    );
}