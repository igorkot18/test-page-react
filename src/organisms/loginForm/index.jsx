import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';

import TitleComponent from '../../atoms/title';
import ButtonComponent from '../../atoms/button';
import InputComponent from '../../atoms/input';

import { LOGIN_FORM_DATA } from './constants';

import "./styles.scss";


const LoginForm = () => {
  const [state, setState] = useState(true);

  return (
    <div className="login-form">
        <TitleComponent title={"Contuct Us"}/>
        <InputComponent />
        <div className="login-form__button">
          <ButtonComponent label={LOGIN_FORM_DATA.button.label} disabled={state}/>
          <Form.Group className="login-form__checkbox" controlId={LOGIN_FORM_DATA.checkbox.controlId}>
            <Form.Check type={LOGIN_FORM_DATA.checkbox.type} label={LOGIN_FORM_DATA.checkbox.label} onClick={() => {setState(!state)}}/>
          </Form.Group>
        </div>
    </div>
    
  )
}

export default LoginForm;