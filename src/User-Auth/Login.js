import React, { Fragment, useRef, useState} from "react";
import image from "../images/login.png";
import classes from "./SignUp.module.css";
import { useAuth } from './AuthContext';
import Alert from './Alert';
import { Link, useHistory } from "react-router-dom";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { logIn } = useAuth();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({show: false, message: '', type: ''});
    const history = useHistory();

    const showAlert = (show= false, message= '', type= '') => {
      setAlert({ show, message, type });
    };
    const formSubmitHandler = async(event) => {
        event.preventDefault();
        if(!emailRef.current.value) {
          return showAlert(true, 'please enter your email!!', 'danger')
        };
        if (!passwordRef.current.value) {
          return showAlert(true, 'please enter a password!!', 'danger')
        };
        try {
          setAlert({show: false, message: '', type: ''})
          setLoading(true)
          await logIn(emailRef.current.value, passwordRef.current.value);
          setLoading(false)
          history.push('/')
        } catch(error){
          console.log('failed to login');
          showAlert(true, `${error.message}`, 'danger')
            // showAlert(true, 'failed to login', 'danger');
        };
        setLoading(false)
    };
    
  return (
    <Fragment>
      <div className={classes.signup}>
        {alert.show && <Alert {...alert} removeAlert= {showAlert}></Alert>}
        <img className={classes["signup-image"]} src={image} alt="pic"></img>
        <form className={classes.form} onSubmit= {formSubmitHandler}>
          <div>
            <label htmlFor="username">Email</label>
            <input id="username" placeholder="abc@mail.com" type= 'email' ref= {emailRef}></input>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" placeholder= '********' type= 'password' ref= {passwordRef}></input>
          </div>
          <button disabled= {loading}  className= {classes['signup-button']} type="submit">Log In</button>
        </form>
        <div className= {classes.forgotpass}> 
          <Link to = '/forgot-password'>Forgot Password</Link>
        </div>
      </div> 
      <div className= {`${classes.login} ${classes.logout}`}>Need an account? <Link to= '/signup'>Sign Up</Link></div>
    </Fragment>
  );
};

export default Login;
