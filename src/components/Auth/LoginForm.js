import React from "react";
import { FormControl, TextField, FormGroup, Button } from "@material-ui/core";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
  }

  usernameChangeHandler(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      username: e.target.value
    });
  }

  passwordChangeHandler(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      password: e.target.value
    });
  }

  formSubmitHandler(e) {
    e.preventDefault();
    const { username, password } = this.state;
    // send to backend
    console.log("Username: ", username);
    console.log("Password: ", password);
  }

  styles = {
    button: {
      marginTop: "10px"
    }
  };

  render() {
    return (
      <div>
        <FormControl>
          <FormGroup>
            <TextField
              label="Username"
              value={this.state.username}
              onChange={this.usernameChangeHandler}
            />
            <TextField
              label="Password"
              value={this.state.password}
              onChange={this.passwordChangeHandler}
            />
            <Button
              variant="contained"
              color="primary"
              style={this.styles.button}
              onClick={this.formSubmitHandler}
            >
              Login
            </Button>
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

export default LoginForm;
