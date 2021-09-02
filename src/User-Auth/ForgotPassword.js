import React, { Fragment, useRef, useState } from "react";
import image from "../images/login.png";
import classes from "./SignUp.module.css";
import { useAuth } from "./AuthContext";
import Alert from "./Alert";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const emailRef = useRef();
  // const passwordRef = useRef();
  // const { logIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  // const history = useHistory();
  const { resetPassword } = useAuth();
//   const [resetMessage, setResetMessage] = useState("");

  const showAlert = (show = false, message = "", type = "") => {
    setAlert({ show, message, type });
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (!emailRef.current.value) {
      return showAlert(true, "please enter your email!!", "danger");
    }
    // if (!passwordRef.current.value) {
    //   return showAlert(true, 'please enter a password!!', 'danger')
    // };
    try {
    //   resetMessage("");
    //   setResetMessage("");
      setAlert({ show: false, message: "", type: "" });
      setLoading(true);
      await resetPassword(emailRef.current.value);
      showAlert(true, 'check Inbox for reesetting email password', 'success')
    //   setResetMessage("check Inbox for reesetting email password");
      //   await logIn(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
        console.log(error.message);
      //   showAlert(true, `${error.message}`, 'danger')
      showAlert(true, "failed to reset password", "danger");
    }
    setLoading(false);
  };

  return (
    <Fragment>
      <div className={classes.signup}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}></Alert>}
        <img className={classes["signup-image"]} src={image} alt="pic"></img>
        <form className={classes.form} onSubmit={formSubmitHandler}>
          <div>
            <label htmlFor="username">Email</label>
            <input
              id="username"
              placeholder="abc@mail.com"
              type="email"
              ref={emailRef}
            ></input>
          </div>

          <button
            disabled={loading}
            className={classes["signup-button"]}
            type="submit"
          >
            Reset Password
          </button>
        </form>
        <div className={classes.forgotpass}>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className={`${classes.login} ${classes.logout}`}>
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </Fragment>
  );
};

export default ForgotPassword;
