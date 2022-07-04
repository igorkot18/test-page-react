import React from "react";

import { TITLE, SUBTITLE } from "./constants";

import "./styles.scss"

const WelcomePage = () => {
    return (
        <section className="welcome">
            <div className="welcome__content container">
                <div className="row">
                    <div className="col-xxl-12">
                        <h1>{TITLE}</h1>
                        <span>{SUBTITLE}</span>
                    </div>
                </div>
            </div>
        </section>    
    )
}

export default WelcomePage;
