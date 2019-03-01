import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import styles from './styles.module.scss';
import logo from './logo.png';
import 'react-toastify/dist/ReactToastify.min.css';

class SignIn extends PureComponent {
  state = {
    username: '',
    password: '',
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;
    if (!prevProps.error && error) {
      this.notify();
    }
  }

  notify = () => {
    toast.error('Wrong username or password!', {
      className: styles.notification,
      autoClose: 2500,
      hideProgressBar: true,
    });
  }

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

  onSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className={styles.wrapper}>
        <img src={logo} alt="Logo" width="350px" />
        <form onSubmit={this.onSubmit} className={styles.form}>
          <TextInput
            value={username}
            onChange={this.onUsernameChange}
            placeholder="Username"
            id="user"
          />
          <TextInput
            value={password}
            onChange={this.onPasswordChange}
            placeholder="Password"
            type="password"
            id="password"
          />
          <Button onClick={this.submit} text="Sign in" className="primary" type="submit" />
        </form>
        <ToastContainer />
      </div>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default SignIn;
