import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFR0c4jOzBTBPXneRJIBujkfCSlQCJNlk",
  authDomain: "fir-auth-efc72.firebaseapp.com",
  projectId: "fir-auth-efc72",
  storageBucket: "fir-auth-efc72.appspot.com",
  messagingSenderId: "936792591968",
  appId: "1:936792591968:web:855b937fe05ce72f22fd05",
  measurementId: "G-10EYV65CC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
