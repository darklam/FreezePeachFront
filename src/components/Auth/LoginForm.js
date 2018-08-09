import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import Input from '@material-ui/core/Input';

const loginForm = props => (
  <form className='form__login' onClick={props.submit} >
      <div className='form__inputs'>
        <Input onClick={props.changed} placeholder='Username' disableUnderline/>
        <Input onClick={props.changed} placeholder='Password' type='password' disableUnderline />
      </div>
      <FormGroup>
        <Input onClick={props.submit} type='submit' value='Login' disableUnderline />
      </FormGroup>
      
  </form>
);

export default loginForm;