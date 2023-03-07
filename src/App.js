import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

firebase.initializeApp({
  apiKey: "AIzaSyBDvinj4oE7nEr3VLwCJbO5yI80inFf4Fk",
  authDomain: "sign-in-popup-86073.firebaseapp.com",
  projectId: "sign-in-popup-86073",
  storageBucket: "sign-in-popup-86073.appspot.com",
  messagingSenderId: "112457780176",
  appId: "1:112457780176:web:418bd2ccc1504be0c1c7d5"
});

const auth = firebase.auth();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(person => {
      if (person) {
        setUser(person);
      } else {
        setUser(null);
      }
    })
  }, []);

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  }

  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <center>
        {
          user ? (
            <div>
              <h1>Welcome to Home</h1>
              <button onClick={signOut}>Sign Out</button>
            </div>
          ) : (
            <button onClick={signInWithGoogle}>Sign In With Google</button>
          )
        }
      </center>
    </div>
  );
}

export default App;
