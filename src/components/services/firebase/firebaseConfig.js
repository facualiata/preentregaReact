import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7gxT-32MrKjzYzicVvkjQq89xlZ4T2LI",
    authDomain: "facundo-proyecto-coder-react.firebaseapp.com",
    projectId: "facundo-proyecto-coder-react",
    storageBucket: "facundo-proyecto-coder-react.appspot.com",
    messagingSenderId: "1087625384096",
    appId: "1:1087625384096:web:49d2744dc926ecf36639c5",
    measurementId: "G-MMBSZNK2Q1"
  };

  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);