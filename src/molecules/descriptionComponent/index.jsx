import React from 'react';

import ButtonComponent from '../../atoms/button';

import "./styles.scss";

const DescriptionComponent = (props) => {
    const {
        title,
        description,
        buttonsLabels,
    } = props

    return (
        <div className='description'>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className='description__buttons-block'>
                {buttonsLabels.map(({id, label}) => (
                    <ButtonComponent
                        key={id}
                        label={label}
                    /> 
                ))}    
            </div>
        </div>
    );
}

export default DescriptionComponent;