import React from 'react';

import './styles.scss';

const TitleComponent = (props) => {
    const {
        title,
    } = props

    return (
        <div className='title'>
            <h2>{title}</h2>
        </div>
    );
}

export default TitleComponent;