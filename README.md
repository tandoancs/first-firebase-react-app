# first-firebase-react-app
First Firebase React.js App using sign in Anonymously

Understanding:
Firebase basics about creating Project and web app, review the article: Firebase Console: create a project and an web app
React.js basic
Prepare before going into details
Create a Firebase Project: Go to the Firebase console (https://firebase.google.com/) and create a new project.
Add a Web App: Select the “Web” platform and give your app a name.
Obtain Firebase Configuration: Copy the provided configuration object, which includes your API key, database URL, and other credentials.
1. Set Up a React Project:
Create a New React App:
Bash

npx create-react-app first-firebase-react-app
cd first-firebase-react-app
2. Install Firebase:

Bash

npm install firebase
2. Initialize Firebase in Your React App:
Create a config.jsx file in your project's root directory and add the following code:

// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  // Your Firebase configuration
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

export { auth, firebase };
// Now you can use Firebase services in your React app!
Replace the placeholder values with your actual Firebase configuration.

3. Use Firebase Services in Your React Components:
Authentication:

JavaScript, file App.js

// App.js default
import React, { useEffect, useState } from "react";
import './App.css';

// add 2 rows
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth } from "./configuration"; // Assuming the correct path to your configuration file
Edit function App:

function App() {

  const signIn = () => {
    signInAnonymously(auth);
  };

  useEffect(() => {
    signIn();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);

  return (
    <div>
      <h1>Sign In Anonymously</h1>

    </div>
  );
}
That is all, You can run bash to React start

npm start
If you see result:


Firebase + React.js app is starting
You are right. Congratulations!
