import React from 'react';

import Form from 'react-bootstrap/Form';

import { INPUT_DATA } from './constants';

import './styles.scss';

const InputComponent = () => {
  return (
    <div className='contact-us-form row'>
        {INPUT_DATA.map(({
          id, 
          label, 
          type, 
          placeholder, 
          controlId, 
          required
        }) => (
          <Form key={id} className="col-3">
              <Form.Group controlId={controlId} className="contact-us-form__item">
                  <Form.Label>{label}</Form.Label>
                  <Form.Control type={type} placeholder={placeholder} required={required}/>
                  <Form.Text className="text-muted">
                  </Form.Text>
              </Form.Group>
          </Form>
        ))}
    </div>
    
  )
}

export default InputComponent;