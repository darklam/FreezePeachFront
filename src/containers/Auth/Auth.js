import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FormGroup from '@material-ui/core/FormGroup';
import axios from 'axios';

import './Auth.css';

class Auth extends Component {
  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    gender: ''
  }

  onChangeHandler = e => {
    const name = e.target.name;
    this.setState({[name]: e.target.value}, () => console.log(this.state));
  }

  submitHandler = e => {
    e.preventDefault();
    axios.post('/auth/register', this.state).then(res => console.log(res.data));
  }

  render() {
    return (
      //login form
      //register form
      <form id='login' onSubmit={this.submitHandler} className='auth__form'>
        <FormGroup><Input onChange={this.onChangeHandler} name='username' placeholder='username' /></FormGroup>
        <FormGroup><Input onChange={this.onChangeHandler} name='password' type='password' placeholder='password' /></FormGroup>
        <FormGroup><Input onChange={this.onChangeHandler} name='firstName' placeholder='firstName' /></FormGroup>
        <FormGroup><Input onChange={this.onChangeHandler} name='lastName' placeholder='lastName' /></FormGroup>
        <FormGroup><Input onChange={this.onChangeHandler} name='gender' placeholder='gender' /></FormGroup>
        <input type="submit" onClick={this.submitHandler} />
      </form> 
    );
  }
}

export default Auth;
