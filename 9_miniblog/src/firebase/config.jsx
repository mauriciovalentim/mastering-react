// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDx7YPT5kLl2bk7NGcFOZeqhkSwy7MPc0M",
    authDomain: "miniblog-a2af4.firebaseapp.com",
    projectId: "miniblog-a2af4",
    storageBucket: "miniblog-a2af4.firebasestorage.app",
    messagingSenderId: "46197893254",
    appId: "1:46197893254:web:9da6b75d2f6c04fe6c4907",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
