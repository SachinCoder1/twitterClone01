// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ3rWC4CAeH-yn0QbAX7BLOWfCbJqhDqo",
  authDomain: "social-media-44da4.firebaseapp.com",
  projectId: "social-media-44da4",
  storageBucket: "social-media-44da4.appspot.com",
  messagingSenderId: "861349657304",
  appId: "1:861349657304:web:dd95aca409d21d9809f5ad"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
