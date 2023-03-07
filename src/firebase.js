// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAofItXVM3z6F8veCz4TA-iRoXAeaDSies",
    authDomain: "alumni-reminisce.firebaseapp.com",
    projectId: "alumni-reminisce",
    //   databaseURL: "gs://alumni-reminisce.appspot.com/images",
    storageBucket: "alumni-reminisce.appspot.com",
    messagingSenderId: "186373419871",
    appId: "1:186373419871:web:5cbb7595574826fbc53cea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
const storage = getStorage(app);
export { storage, db };



