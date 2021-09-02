import firebase from 'firebase/app';
import 'firebase/auth';

const app =  firebase.initializeApp({
    apiKey: "AIzaSyBODkI22Mn2FSEDyAxPPQV5t6pXGFHMXss",
    authDomain: "codeeditor-development.firebaseapp.com",
    projectId: "codeeditor-development",
    storageBucket: "codeeditor-development.appspot.com",
    messagingSenderId: "419674999527",
    appId: "1:419674999527:web:12ad8bc1c4f452b5a7f042",
});

// firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;