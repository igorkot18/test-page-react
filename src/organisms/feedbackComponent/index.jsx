import React from "react";

import ImageComponent from "../../atoms/image";
import DescriptionComponent from "../../molecules/descriptionComponent";
import TitleComponent from "../../atoms/title";

import { FEEDBACK_DATA, TITLE } from "./constants";

import "./styles.scss";

const FeedbackComponent = () => {
    return (
        <div className="feedback">
            <TitleComponent title={TITLE} />
            <div className="feedback__content">
                {FEEDBACK_DATA.map(({logo, title, description, buttonsLabels, id}) => (
                    <div className="feedback__content-item" key={id}>
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
    )
}

export default FeedbackComponent;