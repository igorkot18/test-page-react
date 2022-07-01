import React from "react";

import { TITLE, SUBTITLE } from "./constants";

import "./styles.scss"

const WelcomePage = () => {
    return (
        <div className="welcome">
            <div className="welcome__content">
                <h1>{TITLE}</h1>
                <h2>{SUBTITLE}</h2>
            </div>
        </div>    
    )
}

export default WelcomePage;
