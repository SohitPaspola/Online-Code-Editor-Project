import firebase from 'firebase/app';
import 'firebase/auth';

// const app =  firebase.initializeApp({
//     apiKey: "AIzaSyBODkI22Mn2FSEDyAxPPQV5t6pXGFHMXss",
//     authDomain: "codeeditor-development.firebaseapp.com",
//     projectId: "codeeditor-development",
//     storageBucket: "codeeditor-development.appspot.com",
//     messagingSenderId: "419674999527",
//     appId: "1:419674999527:web:12ad8bc1c4f452b5a7f042",
// });

// export const auth = app.auth();
// export default app;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};


const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;