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
      <form class="row g-3">
        {FORM_DATA.map(({forItem, label, labelClass, type, placeholder, inputClass, id, isRequired}) => (
          <div class="col-xxl-3 col-sm-12">
            <label for={forItem} class={labelClass}>{label}</label>
            <input placeholder={placeholder} type={type} class={inputClass} id={id} required={isRequired} />
        </div>
        ))}

        <div class="col-6">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="invalidCheck2" onClick={() => setState(!state)} />
            <label class="form-check-label" for="invalidCheck2">
              Check to Submit
            </label>
          </div>
        </div>
        <div class="col-6">
          <button class="btn btn-primary submit-button" type="submit" disabled={state}>Submit</button>
        </div>
      </form>

      </div>
    </section>
  )
}

export default LoginForm;