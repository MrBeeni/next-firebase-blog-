// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBJJO-fUpYY4zj6A8EmM63xlpfuAKp4k0",
  authDomain: "my-blog-c660c.firebaseapp.com",
  projectId: "my-blog-c660c",
  storageBucket: "my-blog-c660c.appspot.com",
  messagingSenderId: "957066364932",
  appId: "1:957066364932:web:e77789e2b8cd07a6460d51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
