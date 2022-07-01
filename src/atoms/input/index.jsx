import React from 'react';

import Form from 'react-bootstrap/Form';

import { INPUT_DATA } from './constants';

import './styles.scss';

const InputComponent = () => {
  return (
    <div className='input'>
        {INPUT_DATA.map(({
          id, 
          label, 
          type, 
          placeholder, 
          controlId, 
          required
        }) => (
          <Form key={id}>
              <Form.Group controlId={controlId}>
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