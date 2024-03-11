// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUTCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGESENDERID,
    appId: import.meta.env.VITE_APIID,
    measurementId: import.meta.env.VITE_MESUREMENTID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;