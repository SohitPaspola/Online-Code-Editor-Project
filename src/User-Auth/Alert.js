import React, { useEffect } from 'react';
import './Alert.css';

const Alert = ({ type, message, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  });
  return <p className={`alert alert-${type}`}>{message}</p>;
};

export default Alert;