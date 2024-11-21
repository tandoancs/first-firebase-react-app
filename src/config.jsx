// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your Firebase config here
const firebaseConfig = {
    // Your Firebase configuration
  };

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebase);

export { auth, firebase };
// Now you can use Firebase services in your React app!