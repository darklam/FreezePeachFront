import React, { Component } from "react";
import LoginForm from '../../components/Auth/LoginForm';

import './Auth.css';

class App extends Component {
  render() {
    return (
      <div className='auth__container'>
        <div className='form__container'>
        {/* //login form */}
        <LoginForm />
        {/* //register form */}
        </div>
      </div>
    );
  }
}

export default App;
