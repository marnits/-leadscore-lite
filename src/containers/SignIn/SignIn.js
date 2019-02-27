import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import styles from './SignIn.module.scss';

class SignIn extends PureComponent {
  state = {
    username: '',
    password: '',
  };

  onUsernameChange = (text) => {
    this.setState({
      username: text,
    });
  };

  onPasswordChange = (text) => {
    this.setState({
      password: text,
    });
  };

  submit = () => {
    const { signIn } = this.props;
    const { username, password } = this.state;

    signIn(username, password);
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <TextInput
            value={username}
            onChange={this.onUsernameChange}
            label="Username"
            id="user"
          />
          <TextInput
            value={password}
            onChange={this.onPasswordChange}
            label="Password"
            type="password"
            id="password"
          />
          <Button onClick={this.submit} text="Sign in" className="primary" type="submit" />
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};

export default SignIn;
