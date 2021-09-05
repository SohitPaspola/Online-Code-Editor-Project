import React, { Fragment, useRef, useState } from "react";
import image from "../images/login.png";
import classes from "./SignUp.module.css";
import { useAuth } from './AuthContext';
import Alert from './Alert';
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { signUp } = useAuth();
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({show: false, message: '', type: ''});

    const history = useHistory();

    const showAlert = (show= false, message= '', type= '') => {
      setAlert({ show, message, type });
    };
    const formSubmitHandler = async (event) => {
        event.preventDefault();
        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
          return showAlert(true, 'passwords do not match', 'danger');
        }
        try {
          setAlert({show: false, message: '', type: ''})
          setLoading(true)
          await signUp(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        }catch(error){
          console.log(error.message);
          showAlert(true, `${error.message}`, 'danger')
          // showAlert(true, 'failed to signup', 'danger')
        }
        setLoading(false)
    }
    
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
          <div>
            <label htmlFor="cpassword">Confirm Password</label>
            <input id="cpassword" placeholder= '********' type= 'password' ref= {confirmPasswordRef}></input>
          </div>
          <button disabled= {loading} className= {classes['signup-button']} type="submit">Sign Up</button>
        </form>
      </div>
      <div className= {classes.login}>Already have an account? <Link to = '/login'>Log In</Link> </div>
    </Fragment>
  );
};

export default SignUp;
