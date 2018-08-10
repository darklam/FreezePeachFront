import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';

import './Auth.css';

const loginForm = props => (
  <form id='login' onSubmit={props.submit} onChange={props.changed} className='form__auth' >
      <div className='form__auth__inputs'>
        <Input name='username' formname='login' placeholder='Username' disableUnderline />
        <Input name='password' formname='login' placeholder='Password' type='password' disableUnderline />
      </div>
      <FormGroup>
        <Input type='submit' value='Login' classes={{input: 'button--orange'}} disableUnderline />
      </FormGroup>
  </form>
);

export default loginForm;