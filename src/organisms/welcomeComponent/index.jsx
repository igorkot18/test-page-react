import React from "react";

import { TITLE, SUBTITLE } from "./constants";

import "./styles.scss"

const WelcomePage = () => {
    return (
        <section className="welcome">
            <div className="welcome__content">
                <h1>{TITLE}</h1>
                <span>{SUBTITLE}</span>
            </div>
        </section>    
    )
}

export default WelcomePage;
