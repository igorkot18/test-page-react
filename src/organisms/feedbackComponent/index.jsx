import React from "react";

import ImageComponent from "../../atoms/image";
import DescriptionComponent from "../../molecules/descriptionComponent";
import TitleComponent from "../../atoms/title";

import { FEEDBACK_DATA, TITLE } from "./constants";

import "./styles.scss";

const FeedbackComponent = () => {
    return (
        <section id="feedback" className="feedback">
            <TitleComponent title={TITLE} />
            <div className="container">
                <div className="row">
                    {FEEDBACK_DATA.map(({logo, title, description, buttonsLabels, id}) => (
                        <div className="feedback__content col-xxl-6" key={id}>
                            <ImageComponent source={logo}/>
                            <DescriptionComponent 
                                title={title}
                                description={description}
                                buttonsLabels={buttonsLabels}
                            />
                        </div>
                    ))}
                </div>
            </div>  
        </section>
    )
}

export default FeedbackComponent;