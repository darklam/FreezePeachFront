import React, { Component } from "react";
import LoginForm from '../../components/Auth/LoginForm';
import RegisterForm from '../../components/Auth/RegisterForm';
import axios from 'axios';

import './Auth.css';

class Auth extends Component {
  state = {
    login: {
      username: null,
      password: null,
    },
    register: {
      username: null,
      password: null,
      firstName: null,
      lastName: null,
      gender: null
    }
  }

  onChangeHandler = e => {
    const name = e.target.closest('form').id; //id of the form (login/register)
    const changedInput = e.target.name; //name of the changed input
    const newForm = {...this.state[name]};
    newForm[changedInput] = e.target.value;
    this.setState({[name]: newForm}, () => console.log(this.state));
  }

  submitHandler = e => {
    e.preventDefault();
    const name = e.target.closest('form').id;
    let url = name;
    if (name === 'login') url = 'getToken';
    axios.post('auth/' + url, this.state[name]).then(res => console.log(res.data)); //this should execute a dispatch to put the token in redux store
  }

  render() {
    return (
      <div className='auth__container'>
        <div className='form__container'>
        {/* //login form */}
        <LoginForm submit={this.submitHandler} changed={this.onChangeHandler} />
        {/* //register form */}
        <RegisterForm submit={this.submitHandler} changed={this.onChangeHandler} />
        </div>
      </div>
    );
  }
}

export default Auth;
