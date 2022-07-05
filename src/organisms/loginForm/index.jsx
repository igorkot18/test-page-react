import React, { useState } from 'react';

import TitleComponent from '../../atoms/title';

import { FORM_DATA } from './constant';

import "./styles.scss";


const LoginForm = () => {
  const [state, setState] = useState(true)

  return (
    <section id='contactUs' className="login-form">
      <TitleComponent title="Contact Us"/>
      <div className='container login-form__content'>
      <form className="row g-3">
        {FORM_DATA.map(({forItem, label, labelClass, type, placeholder, inputClass, id, isRequired}) => (
          <div className="col-xxl-3 col-lg-6 col-sm-12" key={id}>
            <label htmlFor={forItem} className={labelClass}>{label}</label>
            <input placeholder={placeholder} type={type} className={inputClass} id={id} required={isRequired} />
        </div>
        ))}

        <div className="col-xxl-6 col-lg-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="invalidCheck2" onClick={() => setState(!state)} />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Check to Submit
            </label>
          </div>
        </div>
        <div className="col-xxl-6 col-lg-12">
          <button className="btn btn-primary submit-button" type="submit" disabled={state}>Submit</button>
        </div>
      </form>

      </div>
    </section>
  )
}

export default LoginForm;