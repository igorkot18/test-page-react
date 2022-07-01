import React from "react";

import Button from "react-bootstrap/Button";

const ButtonComponent = (props) => {
    const {
        label,
        disabled,
    } = props

    return (
        <Button
            style={{width: 200, marginRight: 25}}
            variant="outline-primary"
            disabled={disabled}
        >
            { label }
        </Button>
    )
}

export default ButtonComponent;