import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';

import './Auth.css';

const registerForm = props => (
  <form id='register' onChange={props.changed} className='form__auth' onSubmit={props.submit} >
      <div className='form__auth__inputs'>
        <Input name='username' placeholder='Username' disableUnderline />
        <Input name='password' placeholder='Password' type='password' disableUnderline />
        <Input name='firstName' placeholder='First Name' disableUnderline />
        <Input name='lastName' placeholder='Last Name' disableUnderline />
        <Input name='gender' placeholder='male/female' disableUnderline />
      </div>
      <FormGroup>
        <Input type='submit' value='Register' classes={{input: 'button--green'}} disableUnderline />
      </FormGroup>
  </form>
);

export default registerForm;