import { Fragment, useEffect, useState } from "react";
import Ide from "./Ide";
import classes from "./CodeEditor.module.css";
import LocalStorage from "./LocalStorage";
import { useAuth } from "../User-Auth/AuthContext";
import { useHistory } from "react-router-dom";

const CodeEditor = () => {
  const [html, setHtml] = LocalStorage('html', '');
  const [css, setCss] = LocalStorage('css', '');
  const [js, setJs] = LocalStorage('js', '');
  const [srcDoc, setSrcDoc] = useState('');
  const {currentUser, logout} = useAuth();
  // const [error, setError] = useState('');

  const history = useHistory();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `);
    }, 350);

    return () => clearTimeout(timeout);
  },[setSrcDoc,html,css,js]);

  const logoutHandler = async() => {
    // setError('')
    try{
      await logout()
      history.push('/login')
    } catch {
      // setError( 'Failed to log out')
      console.log('Failed to logout');
    }
  }

  return (
    <Fragment>
      <div className={`${classes.codeEditor} ${classes.codeEditors}`}>
        <Ide
          language="xml"
          IdeName="HTML"
          value={html}
          onChange={setHtml}
        ></Ide>
        <Ide 
          language="css" 
          IdeName="CSS" 
          value={css} 
          onChange={setCss}
        ></Ide>
        <Ide
          language="javascript"
          IdeName="JAVASCRIPT"
          value={js}
          onChange={setJs}
        ></Ide>
      </div>
      <div className= {classes.codeEditor}>
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      <div className= {classes['editor-logout']}>
          <button onClick= {logoutHandler}>Log Out</button>
          <strong>Email:</strong>{currentUser.email}
      </div>
    </Fragment>
  );
};

export default CodeEditor;
// import React  from "react";

// const CodeEditor = () => {
//   return <div>code-editor</div>
// }

// export default CodeEditor;