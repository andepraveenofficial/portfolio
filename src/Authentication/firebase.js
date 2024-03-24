import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup } from "firebase/auth";

// Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "YOUR_API_KEY", // Replace with your actual API key
    authDomain: "YOUR_AUTH_DOMAIN.firebaseapp.com", // Replace with your auth domain
    projectId: "YOUR_PROJECT_ID", // Replace with your project ID
    storageBucket: "YOUR_STORAGE_BUCKET.appspot.com", // Replace with your storage bucket
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID", // Replace with your messaging sender ID
    appId: "YOUR_APP_ID" // Replace with your app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const handleGoogleSignIn = (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();

    signInWithPopup(auth, provider)
        .then((result) => {
            // User successfully signed in
            const credential = result.credential;
            const token = credential.accessToken;
            const user = result.user;

            console.log('User signed in successfully:', user);

            // Implement your success logic here (e.g., store user data, redirect)
        })
        .catch((error) => {
            // Handle errors
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error signing in:', errorCode, errorMessage);
        });
};
