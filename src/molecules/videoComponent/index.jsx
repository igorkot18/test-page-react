import React from 'react';
import ReactPLayer from "react-player"

const VideoComponent = (props) => {
    const {
        url,
    } = props

    return (
        <div>
            <ReactPLayer
                width="500px"
                height="300px"
                controls
                url={url}
            />
        </div>
    );
}

export default VideoComponent;