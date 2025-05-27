import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj0VHdxlHWX4WK-spqU1ks4KIUIIle1l8",
  authDomain: "recipeappfe.firebaseapp.com",
  projectId: "recipeappfe",
  storageBucket: "recipeappfe.firebasestorage.app",
  messagingSenderId: "726737069490",
  appId: "1:726737069490:web:f52ea5a658f6252ca0f0ab",
  measurementId: "G-6VZSF7KL0T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
