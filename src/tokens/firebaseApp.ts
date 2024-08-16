import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANy5aVutEJpTGSSeoAnbLjsQo53esj3bQ",
  authDomain: "trivialy-aef9b.firebaseapp.com",
  projectId: "trivialy-aef9b",
  storageBucket: "trivialy-aef9b.appspot.com",
  messagingSenderId: "480335741809",
  appId: "1:480335741809:web:c98f8166790d9e1641acd0"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
