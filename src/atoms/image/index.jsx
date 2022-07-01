import React from "react";

import './styles.scss';

const ImageComponent = (props) => {
    const {
        source,
    } = props

    return (
        <img src={source} alt='logo' className="image"></img>
    )
}

export default ImageComponent;