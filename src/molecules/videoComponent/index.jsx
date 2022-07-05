import React from 'react';
import ReactPLayer from "react-player"

import './styles.scss';

const VideoComponent = (props) => {
    const {
        url,
    } = props

    return (
        <div className='player-wrapper'>
            <ReactPLayer
                width="100%"
                height="120%"
                className="react-player"
                controls
                url={url}
            />
        </div>
    );
}

export default VideoComponent;