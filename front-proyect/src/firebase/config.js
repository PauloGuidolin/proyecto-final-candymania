// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA0DSAiipw2tRz8CKV9smZ-NAuYuuaO7OA",
    authDomain: "candymania-auth.firebaseapp.com",
    projectId: "candymania-auth",
    storageBucket: "candymania-auth.firebasestorage.app",
    messagingSenderId: "1090458839638",
    appId: "1:1090458839638:web:e3ce2b3d99e2b9fb07a9f7",
    measurementId: "G-6K9R85VDNX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);