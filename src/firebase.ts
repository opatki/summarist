// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxWOwg38y9DFaDMzWRoJnC3GM-O6Lz8nQ",
  authDomain: "summarist-2d5ec.firebaseapp.com",
  projectId: "summarist-2d5ec",
  storageBucket: "summarist-2d5ec.firebasestorage.app",
  messagingSenderId: "95124867718",
  appId: "1:95124867718:web:6b7ae8a527ee39acc69f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}